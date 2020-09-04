// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue) => {
    const [formValues, setFormValues] = useState(initialValue);

    const setValue = (value) => {
        setFormValues(value)
    };

    return [formValues, setValue]
};