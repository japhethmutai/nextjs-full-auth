'use-client';

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth, finishInitialLoad } from "@/redux/features/authSlice";
import { useVerifyMutation } from "@/redux/features/authApiSlice";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Setup = () => {
	const dispatch = useAppDispatch();
	const [verify] = useVerifyMutation();

	useEffect(() => {
		verify(undefined)
			.unwrap()
			.then(() => {
				dispatch(setAuth());
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			})
	}, [])

	return <ToastContainer />
}

export default Setup