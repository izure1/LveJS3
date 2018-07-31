export default function __fireReservation() {

  this.__system__.suppressJob.fire();
  return this;

};