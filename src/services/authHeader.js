const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.accesstoken){
        return { authorization: 'Bearer '+accesstoken}
    }else{
        return {};
    }
}
export default authHeader;