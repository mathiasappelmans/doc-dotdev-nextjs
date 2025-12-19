import CodeBlock from "@/app/components/CodeBlock";
import { Link, Typography} from "@mui/material";
import Image from "next/image";

const page = () => {

const text = `// upgrade node if needed
npm cache clean -f
npm install -g n
n stable
clone the_github_repo_ssh_url
npm i
npm run build

// At first deploy, enable SSL/HTTPS with certbot
certbot --expand -d social.dotdev.be // with your app name
`;

const text1 = `server {
	server_name social.dotdev.be;

	root 						/var/www/srv_dev/app/social/build;
	index index.html;

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/dotdev.be/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/dotdev.be/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
    if ($host = social.dotdev.be) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


	listen 							80;
	listen 							[::]:80;
	server_name social.dotdev.be;
    return 404; # managed by Certbot
}
`;
  return (

      <div className='overflow-x-auto text-sm'>
        <Typography variant="h6" component="div" sx={{mb:2}}>
          ✨ Deploy a React app on Debian 12 VPS
        </Typography>
				<Link href="https://www.digitalocean.com/community/tutorials/deploy-react-application-with-nginx-on-ubuntu" target="_blank" rel="noopener" sx={{mb:2, display:"block"}}>	
				https://www.digitalocean.com/community/tutorials/deploy-react-application-with-nginx-on-ubuntu
				</Link>
        <CodeBlock text={text} />
        <Typography component="div" sx={{mb:2}}>
					run a script that copy the local build folder to the remote server
        </Typography>
				<CodeBlock text={`scp -r ./build/* username@server_ip:/var/www/srv_dev/app/social/build`} />
        <Typography component="div" sx={{mb:2}}>
					or do it manually with Filezilla
        </Typography>
				<Image
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-lg" 
        src="/deploy-react.png" 
        alt=""
      />
        <Typography variant="body2" component="div" sx={{mt:5, wordBreak: "break-all"}}>
          configure /var/www/srv_dev/config/nginx/domains/social.dotdev.be.conf and restart nginx:
        </Typography>
        <CodeBlock text={text1} />
        <CodeBlock text={`service nginx restart`} />
        <Typography variant="body2" component="div" sx={{my:5}}>
          Note: No pm2 config needed for React apps, only for NextJS apps.
        </Typography>

      </div>

  )
}

export default page