export const login = async (email: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
};
