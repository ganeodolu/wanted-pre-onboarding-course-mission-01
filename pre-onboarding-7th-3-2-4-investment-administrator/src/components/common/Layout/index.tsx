interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            width: 100%;
            height: 100vh;
            background-color: #eff2f5;
          }
        `}
      </style>
    </>
  );
}
