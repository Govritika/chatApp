import Conversation from "../models/conversationModel.js";
import Message from "../models/msgModel.js";

//send messages--------------------------

export const sendMsg = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMsg = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMsg) {
      conversation.messages.push(newMsg._id);
    }

    //this will not run parallel
    // await conversation.save();
    // await newMsg.save();

    // this will run in parallel
    await Promise.all([conversation.save(), newMsg.save()]);

    res.status(201).json(newMsg);
  } catch (error) {
    console.log("error in sndMsg controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


// get messages---------------------

export const getMsg = async (req, res) => {

  try {
    const {id:userToChatId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
        participants:{ $all : [senderId, userToChatId] },
    }).populate("messages");

    if(!conversation) {
        return res.status(200).json([]);
    }

    const messages = conversation.messages;
    res.status(200).json(messages);

  } catch (error) {
    console.log("error in getMsg controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
