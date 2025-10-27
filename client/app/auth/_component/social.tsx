import { Button } from '@/components/ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Social = () => {
	return (
		<div className='grid grid-cols-2 w-full gap-1'>
			<Button variant={'destructive'}>
				<FaGoogle />
				<span>Sign up with Google</span>
			</Button>
			<Button variant={'secondary'}>
				<FaGithub />
				<span>Sign up with GitHub</span>
			</Button>
		</div>
	)
}

export default Social
