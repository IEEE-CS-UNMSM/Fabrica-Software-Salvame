import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const logout = async (req, res) => {
    res.cookie("token", "", {
        maxAge: 1,
        //secure: true,
        //maxAge: 1000000,
        //signed: true
    });
    res.status(200).redirect('/');
}

