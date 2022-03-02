type MainProps = {
  title: string
}

export const Main = ({ title = 'React Avançado' }: MainProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
