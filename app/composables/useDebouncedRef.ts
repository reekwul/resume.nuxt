// composables/useDebouncedRef.ts
import { customRef, type Ref } from 'vue';

export function useDebouncedRef<T>(
    initialValue: T,
    delay: number = 500
): {
    immediateValue: Ref<T>;
    debouncedValue: Ref<T>;
} {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let internalValue: T = initialValue;
    let immediateValue: T = initialValue;

    const debouncedValue = customRef<T>((track, trigger) => ({
        get() {
            track();
            return internalValue;
        },
        set(newValue: T) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                internalValue = newValue;
                trigger();
            }, delay);
        },
    }));

    // Создаем ref для немедленного значения
    const immediateRef = customRef<T>((track, trigger) => ({
        get() {
            track();
            return immediateValue;
        },
        set(newValue: T) {
            immediateValue = newValue;
            debouncedValue.value = newValue; // Запускаем отложенное обновление
            trigger();
        },
    }));

    return {
        immediateValue: immediateRef,
        debouncedValue: debouncedValue,
    };
}
