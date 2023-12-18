'use client';

import { useRegister } from "@/hooks";
import { Form } from '@/components/forms';

const LoginForm = () => {
	const {
        email,
        password,
        isLoading,
        onChange,
        onSubmit
	} = useRegister();

	const config = [
		{
			labelText: 'Email Address',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true
		},
		{
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			required: true
		},
	]

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText="Sign up"
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	)
}

export default LoginForm