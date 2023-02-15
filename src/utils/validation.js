import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const registerSchema = yup.object({
  name: yup.string().required(),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const addcontactSchema = yup.object({
  name: yup.string('Enter the name').required('Name is required'),
  number: yup
    .string('Enter the number')
    .min(10, 'Number should be of minimum 10 digits length')
    .required('Number is required'),
});
