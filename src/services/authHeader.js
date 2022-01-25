const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.accesstoken){
        return { authorization: 'Bearer '+user.accesstoken}
    }else{
        return null;
    }
}
export default authHeader;