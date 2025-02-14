export const errorHandler = (err,req,res,next) => {
   const error = new Error();
   const statusCode = error.statusCode;
   const message = error.message;
   return error;
};