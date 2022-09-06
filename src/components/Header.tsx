import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className="w-full h-[18.5rem] bg-header-image bg-center bg-no-repeat bg-cover">
      <img src={logoImg} alt="" className="m-auto pt-16" />
    </header>
  )
}
