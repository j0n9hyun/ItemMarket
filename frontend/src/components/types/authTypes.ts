type onClick = () => void;
type id = string;
type pw = string;

export interface LoginType {
  onClickRegister: onClick;
  onChangeId: any;
  onChangePw: any;
  id: id;
  pw: pw;
  onSubmit: any;
}

export interface eventType {
  target: { value: string | ((currVal: string) => string) }
  preventDefault: () => void 
}

export interface RegisterType {
  onChangeId: any;
  onChangePw: any;
  onClickLogin: () => void;
}