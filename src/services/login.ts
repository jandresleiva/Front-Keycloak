export const login = async (
    email: string,
    password: string
): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        console.log('service initiated');
        try {
            setTimeout(() => {
                if (email === 'test' && password === 'test') {
                    console.log('service test ok');
                    resolve(true);
                } else {
                    console.log('service test false');
                    resolve(false);
                }
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
};
