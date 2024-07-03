import User from "../models/userModel.js";

export const getUsersOnSidebar = async(req, res) => {
    try {
        const loggedInId = req.user._id;

        const filteredUser = await User.find({ _id: { $ne:loggedInId } }).select("-password");

        res.status(200).json(filteredUser);

    } catch (error) {
        console.error("error in getUserOnSidebar controller", error.message);
        res.status(500).json({error:"internal server error!"});
    }
};



