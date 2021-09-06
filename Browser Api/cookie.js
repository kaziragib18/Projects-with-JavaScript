const getCookie = name => {
      const cookie =document.cookie;
      const allCookies = cookie.split(';');
      const findCookie = allCookies.find(c=> c.includes(name));
      if(findCookie){
            'country=BD'
            const cookieNameValue = findCookie.split('=');
            return cookieNameValue[1];
            } 
}