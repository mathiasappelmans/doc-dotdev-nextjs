'use client'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, Paper, Switch } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight } from '@geist-ui/icons';
import useSidebar from '@/app/hooks/useSidebar'

/* Things that are constant and not depending on state or props 
generally should be defined outside the component. 
Otherwise they will be constantly redefined 
and could also potentially cause issues with unstable references, 
dependency arrays, etc. */
export const _data = [
  {
    id: '1',
    name: 'React Next.js',
    url: '/nextjs/scratchreact',
    icon: 'tabler-chart-pie-2',
    section: 'Dashboards'
  },
  {
    id: '2',
    name: 'Laravel',
    url: '/laravel/eager-loading',
    icon: 'tabler-chart-pie-2',
    section: 'Laravel'
  },
  {
    id: '3',
    name: 'Eager Loading',
    url: '/laravel/components',
    icon: 'tabler-chart-pie-2',
    section: 'Laravel'
  },
]


export const data = {
  nextjsListTitle : { text: "React Next.js", route: '/nextjs' },
  nextjsList : [
    {
      text: 'package-lock.json explained',
      route: '/nextjs/package-lock'
    },
    {
      text: 'React + TW4 install',
      route: '/nextjs/scratchreact'
    },
    {
      text: 'React router and navigation',
      route: '/nextjs/reactrouter'
    },
    {
      text: 'SSR',
      route: '/nextjs/server-side'
    },
    {
      text: 'typeof window',
      route: '/nextjs/typeof'
    },
    {
      text: 'Promise',
      route: '/nextjs/promise'
    },
    {
      text: 'useState',
      route: '/nextjs/usestate'
    },
    {
      text: 'useEffect',
      route: '/nextjs/useeffect'
    },
    {
      text: 'useContext',
      route: '/nextjs/usecontext'
    },
    {
      text: 'useRouter',
      route: '/nextjs/userouter'
    },
    {
      text: 'useReducer',
      route: '/nextjs/usereducer'
    },
    {
      text: 'Redux',
      route: '/nextjs/redux'
    },
    {
      text: 'Headers - Cookies',
      route: '/nextjs/headers'
    },
    {
      text: 'DOM vs HTML',
      route: '/nextjs/dom'
    },
    {
      text: 'Children Pattern',
      route: '/nextjs/children-pattern'
    },
    {
      text: 'Named | Default ex-import',
      route: '/nextjs/export-default-vs-named'
    },
    {
      text: 'Prisma',
      route: '/nextjs/prisma'
    },
    {
      text: 'ORM',
      route: '/nextjs/getbyorm'
    },
    {
      text: 'API',
      route: '/nextjs/getbyapi'
    },
    {
      text: 'json-server',
      route: '/nextjs/json-server'
    },
    {
      text: 'Server Actions',
      route: '/nextjs/action'
    },
    {
      text: 'Suspense',
      route: '/nextjs/suspence'
    },
    {
      text: 'dynamic import',
      route: '/nextjs/dynamic'
    },
    {
      text: 'Image',
      route: '/nextjs/next-image'
    },
    {
      text: 'Shadcn',
      route: '/nextjs/shadcn'
    },
    {
      text: 'Icons',
      route: '/nextjs/icons'
    },
    {
      text: 'Iconify',
      route: '/nextjs/iconify'
    },
    {
      text: 'Form',
      route: '/nextjs/form-old-way'
    },
    {
      text: 'setInterval',
      route: '/nextjs/setinterval'
    },
    {
      text: 'setTimeout',
      route: '/nextjs/settimeout'
    },
    {
      text: 'Tailwind+MUI from scratch',
      route: '/nextjs/scratch'
    },
    {
      text: 'Webpack, SWC, Babel : transpile and bundle',
      route: '/nextjs/swc'
    },
    {
      text: 'Deploy Next on Linux',
      route: '/nextjs/deploy'
    },
    {
      text: 'Deploy React on Linux',
      route: '/nextjs/deploy-react'
    },
    {
      text: 'CodeBlock',
      route: '/nextjs/syntax'
    },
    {
      text: 'Thiny Scrollbar',
      route: '/nextjs/scrollbar'
    },
    {
      text: 'SVG config',
      route: '/nextjs/svgcolor'
    },
    {
      text: 'TSX props typing',
      route: '/nextjs/optionaltsx'
    },
    {
      text: 'JWT',
      route: '/nextjs/jwt'
    },
    {
      text: 'map - find',
      route: '/nextjs/map-find'
    },
    {
      text: 'Optional chaining ?.',
      route: '/nextjs/optional-chaining'
    },
    {
      text: 'Metadata api',
      route: '/nextjs/metadata'
    },
  ],
  laravelListTitle : { text: "Laravel", route: '/laravel' },
  laravelList : [
    {
      text: 'Eager Loading',
      route: '/laravel/eager-loading'
    },
    {
      text: 'Components',
      route: '/laravel/components'
    },
    {
      text: 'Custom Global Function',
      route: '/laravel/custom-global-function'
    },
  ],
  symfonyListTitle : { text: "Symfony", route: '/symfony' },
  symfonyList : [
    {
      text: '.env',
      route: '/symfony/env'
    },
    {
      text: 'Service API',
      route: '/symfony/api'
    },
    {
      text: 'Doctrine',
      route: '/symfony/doctrine'
    },
    {
      text: 'Doctrine n+1 fix',
      route: '/symfony/doctrinefix'
    },
    {
      text: 'DTO',
      route: '/symfony/dto'
    },
    {
      text: 'Services',
      route: '/symfony/services'
    },
    {
      text: 'Mercure Push Hub',
      route: '/symfony/mercure'
    },
    {
      text: 'Messenger',
      route: '/symfony/messenger'
    },
    {
      text: 'Asset Mapper',
      route: '/symfony/asset-mapper'
    },
    {
      text: 'Webpack Encore',
      route: '/symfony/encore'
    },
    {
      text: 'Twig',
      route: '/symfony/twig'
    },
    {
      text: 'Tailwind Install',
      route: '/symfony/tailwind'
    },
    {
      text: 'Bootstrap css',
      route: '/symfony/bootstrap'
    },
    {
      text: 'KNP Paginator',
      route: '/symfony/kpnpaginator'
    },
  ],
  phpListTitle : { text: "PHP", route: '/php' },
  phpList : [
    {
      text: 'Constructor Promotion',
      route: '/symfony/promotion'
    },
    {
      text: 'OpenAPI - Swagger',
      route: '/symfony/openapi'
    },
    {
      text: '__DIR__',
      route: '/symfony/dir'
    },
    {
      text: 'Composer',
      route: '/symfony/composer'
    },
    {
      text: 'Bootstrap template',
      route: '/symfony/html'
    },
    {
      text: 'Curl API Merge arrays',
      route: '/symfony/merge'
    }
  ],
  muiListTitle : { text: "MUI", route: '/mui' },
  muiList : [
    {
      text: 'Demo',
      route: '/mui/demo'
    },
    {
      text: 'sx versus styled',
      route: '/mui/versus'
    },
    {
      text: 'Custom colors',
      route: '/mui/color'
    },
    {
      text: 'Custom fonts',
      route: '/mui/fonts'
    },
    {
      text: 'Draggable Scroll',
      route: '/mui/draggable'
    },
    {
      text: 'MUI X Tree View',
      route: '/mui/xtreeview'
    },
    {
      text: 'Theme',
      route: '/mui/theme'
    },
  ],
  tailwindListTitle : { text: "Tailwind", route: '/tailwind' },
  tailwindList : [
    {
      text: 'Conditional className',
      route: '/tailwind/conditional'
    },
    {
      text: 'Components',
      route: '/tailwind/components'
    },
    {
      text: 'Custom colors',
      route: '/tailwind/color'
    },
    {
      text: 'Custom fonts',
      route: '/tailwind/fonts'
    },
  ],
  debianListTitle : { text: "Debian-Ubuntu", route: '/debian' },
  debianList : [
    {
      text: 'Reinstall from scratch',
      route: '/debian/reinstall'
    },
    {
      text: 'Subdomain',
      route: '/debian/subdomain'
    },
  ],
  sqlListTitle : { text: "SQL", route: '/sql' },
  sqlList : [
    {
      text: 'SQLite',
      route: '/sql/sqlite'
    },
    {
      text: 'MySQL',
      route: '/sql/mysql'
    },
  ],
  mainList : [
    {
      text: 'Docker',
      route: '/docker'
    },
    {
      text: 'Git',
      route: '/git'
    },
    {
      text: 'GitLab CI/CD',
      route: '/gitlab'
    },
    {
      text: 'async defer script',
      route: '/async-defer'
    },
    {
      text: 'Versioning',
      route: '/versioning'
    },
    {
      text: 'Emoji',
      route: '/emoji'
    },
    {
      text: 'Scss - Sass',
      route: '/sass'
    },
    {
      text: 'Page Template',
      route: '/template'
    },
  ],
}

// style
const ListButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
  "&:hover": { color: theme.palette.text.primary, backgroundColor: 'transparent' },
  "&.Mui-selected": {
    color: theme.palette.link.main, backgroundColor: 'transparent',
    "&:hover": { backgroundColor: 'transparent' },
  }
}));
const StyledList = styled(List)({
  "&.MuiList-root": { maxWidth: '100%' }
})

export default function Menu() {

  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState('');
  const [laravelListOpen, setLaravelListOpen] = useState(false);
  const [symfonyListOpen, setSymfonyListOpen] = useState(false);
  const [phpListOpen, setPhpListOpen] = useState(false);
  const [muiListOpen, setMuiListOpen] = useState(false);
  const [tailwindListOpen, setTailwindListOpen] = useState(false);
  const [nextjsListOpen, setNextjsListOpen] = useState(false);
  const [debianListOpen, setDebianListOpen] = useState(false);
  const [sqlListOpen, setSqlListOpen] = useState(false);
	const { sidebarState, setSidebarState }  = useSidebar();

	const handleSwitchAll = (checked) => {
		setLaravelListOpen(checked)
		setSymfonyListOpen(checked)
		setPhpListOpen(checked)
		setNextjsListOpen(checked)
		setMuiListOpen(checked)
		setTailwindListOpen(checked)
		setDebianListOpen(checked)
		setSqlListOpen(checked)
	}

  return (		
		<Paper 
			elevation={0} 
			sx={{boxShadow: "4px 0 4px -5px #999"}}
			className={`scrollbar z-10 rounded-lg fixed bottom-0 overflow-y-scroll lg:scroll top-16 transition-all duration-500 shadow-[red_1px_0_5px_-2px] ${sidebarState ? 'w-fit h-full ml-0' : '-ml-80 md:ml-0'}`}
		>
			<div className='flex gap-1 justify-end items-center mt-3'>
				<div className='text-sm'>Collapse</div>
				<Switch onChange={(event) => handleSwitchAll(event.target.checked)} />
			</div>
      <nav className='overflow-y-auto overflow-x-hidden my-6'>
        <StyledList sx={{ width: 310, paddingLeft: 5 }}>

          <ListItemButton onClick={() => { setNextjsListOpen(!nextjsListOpen) }} disableRipple dense>
            <ListItemText primary={`${data.nextjsListTitle.text}`} /> {nextjsListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={nextjsListOpen} timeout="auto" unmountOnExit>
            <List component="div" className='max-w-full'>
              {data.nextjsList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={() => { setMuiListOpen(!muiListOpen) }} disableRipple dense>
            <ListItemText primary={`${data.muiListTitle.text}`} /> {muiListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={muiListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {data.muiList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={() => { setTailwindListOpen(!tailwindListOpen) }} disableRipple dense>
            <ListItemText primary={`${data.tailwindListTitle.text}`} /> {tailwindListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={tailwindListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {data.tailwindList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton component="a" onClick={() => { setLaravelListOpen(!laravelListOpen) }} disableRipple dense>
            <ListItemText primary={`${data.laravelListTitle.text}`} /> 
						{laravelListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={laravelListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {data.laravelList.map((item) => (
                <ListButton
                  disableRipple
                  component="div"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route);
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton component="a" onClick={() => { setSymfonyListOpen(!symfonyListOpen) }} disableRipple dense>
            <ListItemText primary={`${data.symfonyListTitle.text}`} /> {symfonyListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={symfonyListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {data.symfonyList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton component="a" onClick={() => { setPhpListOpen(!phpListOpen) }} disableRipple dense>
            <ListItemText primary={`${data.phpListTitle.text}`} /> {phpListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={phpListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {data.phpList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={() => { setDebianListOpen(!debianListOpen) }} disableRipple dense>
            <ListItemText primary={`${data.debianListTitle.text}`} /> {debianListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={debianListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {data.debianList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={() => { setSqlListOpen(!sqlListOpen) }} disableRipple dense>
            <ListItemText primary={`${data.sqlListTitle.text}`} /> {sqlListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={sqlListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {data.sqlList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          {data.mainList.map((item, index) => (
            <ListItem key={item.text + index} disablePadding sx={{ display: 'block' }}>
              <ListButton
                disableRipple
                selected={selectedIndex === (item.route)}
                onClick={() => {
                  setSelectedIndex(item.route)
                  router.push(item.route)
									setSidebarState( false )
                }}
                sx={{ justifyContent: 'initial' }} dense
              >
                <ListItemText primary={item.text} sx={[{ fontSize: 10 }, { opacity: 1 }]}
                />
              </ListButton>
            </ListItem>
          ))}

        </StyledList>
      </nav>
    </Paper>
		
  );
}