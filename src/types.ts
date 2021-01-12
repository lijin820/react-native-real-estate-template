export type ApartmentType = {
  id: string;
  title: string;
  price: number;
  pricePerSqm: number;
  sqm: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  picture: string;
};

export type ModalProps = {
  testId?: string;
  visible: boolean;
  setVisible: (args: boolean) => void;
  filterOptions: any;
  handleFilterOptions: (options: any) => void;
};
