
class StringTools{

    public generateRandomString(length){
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz1234567890'

        const charactersLength = characters.length;

        for(let i = 0; i< length; i++){
            const randomIndex = Math.floor(Math.random() * charactersLength);
            result += characters.charAt(randomIndex);
        }

        return result;
    }
}

export default new StringTools();