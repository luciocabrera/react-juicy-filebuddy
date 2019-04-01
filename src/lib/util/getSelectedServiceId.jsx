import store from '../../store';

export default function () {
	const selectedService = store.getState().selectedService;
	if (!selectedService)
		return null;
	return selectedService._id;
}