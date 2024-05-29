class Ride {
  constructor(kms = 0) {
    this.pricePerKm = 18;
    this.kms = kms.toFixed(2);
  }
  getprice() {
    return `₹${this.kms * this.pricePerKm}`;
  }
}

const ride = new Ride(10.26);
console.log(ride.getprice());
