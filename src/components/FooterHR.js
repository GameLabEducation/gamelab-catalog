export default function ({ className, ...props }) {
  return <hr className={'border-[#8d8d8d] my-10 ' + className} {...props} />
}
