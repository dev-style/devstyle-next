require("dotenv").config()
import mongoose, { Document, Model, Schema } from "mongoose"

interface IAffiliation extends Document {
    ambassadorId: mongoose.Schema.Types.ObjectId;
    affiliateCode: string;
    affiliateLink: string;
    clicksCount: number;
    createdAt: Date

}


const AffiliationSchema: Schema<IAffiliation> = new mongoose.Schema(
    {

        ambassadorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ambassador",
            required: true,
        },
        affiliateCode: {
            type: String,
            required: true,
        },
        affiliateLink: {
            type: String,
            required: true,
        },
        clicksCount: {
            type: Number,
            default: 0,
            require: false
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
)



export default mongoose.models.Affiliation ||
    mongoose.model("Affiliation", AffiliationSchema);
