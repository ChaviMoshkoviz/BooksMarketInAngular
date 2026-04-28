import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. שליפת הטוקן מהאחסון המקומי של הדפדפן
  const token = localStorage.getItem('token');

  // 2. אם קיים טוקן, נשכפל את הבקשה ונוסיף לה את ה-Header של ה-Authorization
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned); // המשך לבקשה המשוכפלת עם הטוקן
  }

  // 3. אם אין טוקן, המשך בבקשה המקורית
  return next(req);
};