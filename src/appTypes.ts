interface BoxPropsInterface {
  id: number | string;
  width: number;
  height: number;
  backgroundColor: string;
  remove: Function
  // remove: (id:number | string) => void;

}

interface NewBoxFormProps {
  createBox: Function
}



export type {BoxPropsInterface, NewBoxFormProps}