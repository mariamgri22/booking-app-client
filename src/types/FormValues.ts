export interface FormValues {
  username: string;
  telephone: string;
  email: string;
  password: string;
  confirmPassword: string;
  reminder: string;
  comment: string;
}

export interface RegisterFormProps {
  handleBooking: (
    values: FormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => void;
}

export interface FormLoginValues {
  email: string;
  password: string;
}