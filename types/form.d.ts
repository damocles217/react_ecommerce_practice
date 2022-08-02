type FormType = {
	name: string;
	lastname: string;
	email: string;
	password: string;
	confirm_password: string;
	age: Date;
	phone: string;
	[key: string]: any;
};

type ErrorType = {
	message: string;
	path: string;
	[key: string]: any;
};

type ErrorsType = Array<ErrorType>;