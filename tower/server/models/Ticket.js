import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


export const TicketSchema = new Schema({
   
    eventId: { type: ObjectId, required: true },
   accountId: { type: ObjectId, required: true },
} , { timestamps: true, toJSON: { virtuals: true } });


TicketSchema.virtual('account', {
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'})


TicketSchema.virtual('towerEvent', {
    localField: 'eventId',
    foreignField: '_id',
    justOne: true,
    ref: 'TowerEvent'})