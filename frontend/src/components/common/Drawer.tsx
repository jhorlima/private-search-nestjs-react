import { HTMLAttributes, PropsWithChildren } from "react";
import { joinClassNames } from "@utils/html.util";

type DefaultProps = PropsWithChildren &
  Pick<HTMLAttributes<HTMLDivElement>, "className">;

type DrawerProps = DefaultProps;
type DrawerContentProps = DefaultProps;
type DrawerSideProps = DefaultProps;
type DrawerToggler = DefaultProps;

export const DRAWER_ID = "my-drawer";

export const Drawer = ({ children, className, ...props }: DrawerProps) => {
  const joinedClassName = joinClassNames("drawer", className);
  return (
    <div className={joinedClassName} {...props}>
      <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
};

export const DrawerContent = ({
  children,
  className,
  ...props
}: DrawerContentProps) => {
  const joinedClassName = joinClassNames("drawer-content", className);

  return (
    <div className={joinedClassName} {...props}>
      {children}
    </div>
  );
};

export const DrawerSide = ({
  children,
  className,
  ...props
}: DrawerSideProps) => {
  const joinedClassName = joinClassNames("drawer-side", className);

  return (
    <aside className={joinedClassName} {...props}>
      <label
        htmlFor={DRAWER_ID}
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      {children}
    </aside>
  );
};

export const DrawerToggler = ({
  children,
  className,
  ...props
}: DrawerToggler) => {
  return (
    <label
      htmlFor={DRAWER_ID}
      className={joinClassNames("drawer-button", className)}
      {...props}
    >
      {children}
    </label>
  );
};
