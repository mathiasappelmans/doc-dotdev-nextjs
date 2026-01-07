import CodeBlock from "@/app/components/CodeBlock";
import { Link, Typography } from "@mui/material";

const page = () => {
	const text =
		`https://www.ovh.com/manager

En bas de cette page, click on Serveurs privés virtuels 1 vps******.ovh.net
Then click  reinstall my VPS --> Debian 11
if a public key is required, it's in c:/users/matha/.ssh/id_rsa.pub

The new root pwd will be sended to t******@gmail.com

Se connecter avec Putty et Filezilla sftp 5*.***.**.**6 root {your root password}

When connected, change root pwd with command 'passwd root'

In CLI :

sudo -s			(root)

change keyboard layout if needed: sudo dpkg-reconfigure keyboard-configuration

apt update
apt -y install nginx
apt install -y lsb-release ca-certificates apt-transport-https software-properties-common gnupg2
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list
curl -fsSL  https://packages.sury.org/php/apt.gpg| sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/sury-keyring.gpg
apt update
apt -y install php8.4 php8.4-fpm


Configure Nginx:
---------------

service nginx status 
nginx -t 				pour checker la config

- /etc/nginx/nginx.conf ligne 63
						include /etc/nginx/sites-enabled/*;

- rm -rf /var/www/html 
- mkdir and touch: /var/www/srv_dev/config/nginx/server.conf
- mkdir and touch: /var/www/srv_dev/log/nginx/error.log
- mkdir and touch: /var/www/srv_dev/config/nginx/default_errorpages.conf

# /var/www/srv_dev/config/nginx/server.conf
include /var/www/srv_dev/config/nginx/domains/*.conf;
server {
    listen                  80 default_server;
    listen                  [::]:80 default_server ipv6only=on;
    server_name             51.255.35.196 "";

    error_log               /var/www/srv_dev/log/nginx/error.log notice;
    access_log              off;

    include                 /var/www/srv_dev/config/nginx/default_errorpages.conf;

    location / {
        return 404;
    }
}

- cd /etc/nginx/sites-enabled
- rm default
- create symlink to /var/www/srv_dev/config/nginx/server.conf
		ln -s /var/www/srv_dev/config/nginx/server.conf /etc/nginx/sites-enabled/srv_dev.conf

- cd /var/www/srv_dev/config/nginx/
- mkdir domains
- cd domains
- touch mathiasappelmans.be.conf
		server {
			server_name mathiasappelmans.be;
			include /var/www/srv_dev/app/dotdev-next-tw/.nginx;	
		}

- mkdir /var/www/srv_dev/app
- curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
- sudo apt-get install -y nodejs
- apt install npm
- node -v
- npm -v
- apt install git-all
- ssh-keygen
- copy the public key /root/.ssh/id_rsa.pub to github settings ssh keys
- git clone git@github.com:mathiasappelmans/dotdev-next-tw.git
- cd dotdev-next-tw
- touch .nginx
			location / {
				proxy_pass http://localhost:3000;
			}
- npm i
- check the cibles IP in https://manager.eu.ovhcloud.com/#/web/domain/mathiasappelmans.be/zone
- npm run build

- npm install -g pm2
- pm2 start npm --name "mathiasappelmans.be" -- start -- --port=3000
- pm2 save
- pm2 list

HTTPS config
-----------
apt install snapd
snap install snapd
reboot  (will add snap/bin in %PATH)
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
service nginx stope
certbot --nginx
service nginx start
service nginx status

if this error occur: "port 80 or 443 allready in use" :
- pkill -f nginx & wait $!
- systemctl start nginx 

relaunch pm2:
------------
pm2 start npm --name "mathiasappelmans.be" -- start -- --port=3000


`;
	return (
		<div className='overflow-x-auto text-sm'>
			<Typography variant='body1' component="div" sx={{ marginTop: 4, marginBottom: 2 }}>
				Reinstall VPS from scratch on Debian 11
			</Typography>
			<Link href="https://help.ovhcloud.com/csm/en-dedicated-servers-root-password?id=kb_article_view&sysparm_article=KB0043633">
			https://help.ovhcloud.com/csm/en-dedicated-servers-root-password?id=kb_article_view&sysparm_article=KB0043633
			</Link>
			<Typography variant='body1' component="div" sx={{ marginTop: 4, marginBottom: 2 }}>
				Do not enable root ssh login ! put your user in the sudoers group and use the sudo command.
			</Typography>
			<CodeBlock text={text} />
		</div>

	)
}

export default page