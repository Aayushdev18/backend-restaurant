import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req,res,next) => {
    // console.log(req.body)
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time){
        // console.log("yaha ok")
        return next(new ErrorHandler("Please fill full reservation form!", 400));   
    }
    // console.log("yaha ya tha")
    try {
        // console.log("yaha bhi aya tha")
        // console.log(Reservation.create())
        // console.log("Data being passed to Reservation.create():", {
        //     firstName, lastName, email, phone, time, date
        // });
        
        await Reservation.create({firstName, lastName, email, phone, time, date});
        // console.log("shocking")
        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully!",
        });
    } catch (error) {

        if (error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
                // console.log(err.message)}
            );
            return next(new ErrorHandler(validationErrors.join(" , "),400));
            // return next(error);
        }
        // console.log("ye walaaa")
        return next(error);
    }
};
