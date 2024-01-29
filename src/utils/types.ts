import { ComponentPropsWithoutRef, ReactNode, SVGProps } from "react";

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface InputPropsType extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  error?: string;
  inputClasses?: string;
}

export interface ContainerPropsType {
  children: ReactNode;
  className?: string;
  backgroundClassName?: string;
}

export type SvgPropsType = SVGProps<SVGSVGElement>;

export interface CircularLoaderPropsType extends SvgPropsType {
  open: boolean;
}

export interface AuthContainerPropType {
  children: ReactNode;
}


export enum Status {
  LOADING = "loading",
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated"
}

export type StatusType = Record<Status, string>

export interface UserDetailsType {
  firstName: string,
  lastName: string;
  image: string;
  email: string;
}

export interface UserDetailsPropsType {
  userDetails: UserDetailsType | null;
}

