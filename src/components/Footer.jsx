

const Footer = () => {

  return (
    <footer className=" mt-10 mb-20 text-center dark:text-white text-sm sm:text-base" style={{paddingInline:"10px"}}>
      <p >Todos os direitos reservados a Buy n Short</p>
      <p>
        Desenvolvido por Felipe Lacerda{' '}
        <a className="underline cursor-pointer font-bold hover:text-orange-800"
          href="https://www.linkedin.com/in/felipe-lacerda-oliveira/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </p>
    </footer>
  )
}

export default Footer
