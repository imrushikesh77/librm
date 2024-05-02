import Code from "../models/code.model.js";

const fetchTitles = async (req, res) => {
    try {
        const titles = await Code.find({}, { title: 1, _id: 1});
        res.status(200).json(titles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const searchByTitle = async (req, res) => {
    const title = req.params.title;
    try {
        const codes = await Code.find({ title: { $regex: title, $options: 'i' } });
        res.status(200).json(codes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const fetchCode = async (req, res) => {
    const id = req.params.id;
    try {
        const code = await Code.findOne({ _id: id }, { code: 1 });
        res.status(200).json(code);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addCode = async (req, res) => {
    const {code, title} = req.body;
    try {
        const newCode = new Code({ code, title });
        await newCode.save();
        res.status(201).json(newCode);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}   

const updateCode = async (req, res) => {
    const id = req.params.id;
    const {code, title} = req.body;
    try {
        if(!title && !code) {
            return res.status(400).json({ message: "Please provide title or code." });
        }
        else if(!title) {
            const updatedCode = await Code.findOneAndUpdate ({ _id: id }, { code }, { new: true });
            await updatedCode.save();
        }
        else if(!code) {
            const updatedCode = await Code.findOneAndUpdate ({ _id: id }, { title }, { new: true });
            await updatedCode.save();
        }
        else{
            const updatedCode = await Code.findOneAndUpdate ({ _id: id }, { code, title }, { new: true });
            await updatedCode.save();
        }
        res.status(200).json({ message: "Code updated successfully." });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCode = async (req, res) => {
    const id = req.params.id;
    try {
        await Code.findOneAndDelete ({ _id: id });
        res.status(200).json({ message: "Code deleted successfully." });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { 
    fetchTitles, 
    searchByTitle,
    fetchCode,
    addCode,
    updateCode,
    deleteCode 
};