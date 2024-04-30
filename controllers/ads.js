import ads from '../models/ads';

export const getAds = async (req, res) => {
    try {
        const ads = await ads.find();
        res.status(200).json(ads);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getNewAds = async (req, res) => {
    const currentDate = new Date();
    try {
        const newAds = await ads.find({ createdAt: { $gte: currentDate } });
        res.status(200).json(newAds);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};    

export const createAd = async (req, res) => {
    const ad = req.body;
    const newAd = new ads(ad);
    try {
        await newAd.save();
        res.status(201).json(newAd);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


export const updateAd = async (req, res) => {
    const { id } = req.params;
    const ad = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No ad with that id');
    try {
        const updatedAd = await ads.findByIdAndUpdate(id, ad, { new: true });
        res.json(updatedAd);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteAd = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No ad with that id');
    await ads.findByIdAndRemove(id);
    res.json({ message: 'Ad deleted successfully' });
    };

export const reserved = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No ad with that id');
    try {
        const ad = await ads.findById(id);
        if (!ad) return res.status(404).send('No ad with that id');
        ad.reserved = true;
        await ad.save();
        
        res.status(200).json({ message: 'Reservation successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
