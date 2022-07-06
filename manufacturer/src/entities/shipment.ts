export default interface Shipment {
  id: string;
  vaccineName: string;
  quantity: number;
  manufacturingDate: number;
  manufacturerId: string;
  authorityId: string;
  customerId: string;
  authorityVerified: boolean;
  customerVerified: boolean;
}
