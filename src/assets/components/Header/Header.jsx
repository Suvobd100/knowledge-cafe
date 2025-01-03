import profile from '../../images/profile.png'
export default function Header() {
  return (
    <div className='flex justify-between mt-5 border-b-2'>
        <h2 className='text-4xl text-zinc-900'>Knowledge Cafe</h2>
        <img src={profile} alt="profile image" />
    </div>
  )
}
