import {
  Flex,
  Image,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  InputLeftAddon,
  InputLeftElement,
  Text,
  Box,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import JoinPopup from "./JoinPopup";
import SignInPopup from "./SignInPopup";
import { BiChevronDown } from "react-icons/bi";
import CommonHeaderCategory from "./HeaderCategory";
import CommonContainer from "./shared/CommonContainer";
import {CgMenuRight} from "react-icons/cg";

export default function Header() {
  return (
    <Box as="header" borderBottom={{base:"1px","2xl":"0px"}} borderColor={"#ebebeb"}>
      <Container px={{md:10}} maxW="90vw" py={4}>
        <Flex justifyContent={"space-between"}>
          <Flex align="center" gap={8}>
            <Link to="/">
              <Image src="/logo.png" width="128px" />
            </Link>
            <InputGroup size="sm" display={{base:"none",xl:"block"}}>
              <InputLeftElement>
                <BsSearch />
              </InputLeftElement>
              <Input placeholder="Find Services" w={{"2xl":"600px"}} borderRadius={5} />
              <InputRightElement width="5rem">
                <Button
                  height="2rem"
                  colorScheme={"brand"}
                  borderLeftRadius={0}
                >
                  Search
                </Button> 
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex align="center" gap={{base:4,xl:10}} display={{base:"none",md:"flex"}} >
            {linkList.map((item) => (
              <Link to={item.href}>
                <Text color="gray">{item.name}</Text>
              </Link>
            ))}
            <SignInPopup />
            <JoinPopup />
          </Flex>
          <Flex alignItems="center" color='#c5c5c5' display={{base:"flex",md:"none"}}>
            <IconButton variant="unstyled" cursor="pointer" >
              <CgMenuRight size="30px" />
            </IconButton>
          </Flex>
        </Flex>
      </Container>
      <Flex borderTop="2px" display={{base:"none","2xl":"block"}} borderBottom="1px"  py={1} borderColor={"#ebebeb"}>
        <CommonContainer >
          <Flex justifyContent='space-between' py={2}>
            {categoriesData.map((item) => {
              return (
                <CommonHeaderCategory
                  key={item.name}
                  name={item.name}
                  structured={item.structured}
                  linksList={item.linksList}
                />
              );
            })}
          </Flex>
        </CommonContainer>
      </Flex>
    </Box>
  );
}
const linkList = [
  {
    name: "Find Work",
    href: "find-work",
  },
  {
    name: "Gigs",
    href: "marketplace",
  },
  {
    name: "Become a Seller",
    href: "become-seller",
  },
];

const categoriesData = [
  {
    name: "Graphics & Design",
    structured: true, //Structured data would contain title with links whereas non structured would not contain any title with links. Both rendering would be different based on true or false
    linksList: [
      [
        {
          title: "Logo & Brand Identity",
          list: [
            {
              label: "Logo Design",
              href: "#",
            },
            {
              label: "Brand Style Guides",
              href: "#",
            },
            {
              label: "Fonts & Typography",
              href: "#",
            },
            {
              label: "Business Cards & Stationery",
              href: "#",
            },
          ],
        },
        {
          title: "Gaming",
          list: [
            {
              label: "Game Art",
              href: "#",
            },
            {
              label: "Graphics for Streamers",
              href: "#",
            },
            {
              label: "Twitch Store",
              href: "#",
            },
          ],
        },
        {
          title: "Art & Illustration",
          list: [
            {
              label: "Illustration",
              href: "#",
            },
            {
              label: "NFT Art",
              href: "#",
            },
            {
              label: "Pattern Design",
              href: "#",
            },
            {
              label: "Portraits & Caricatures",
              href: "#",
            },
            {
              label: "Cartoons & Comics",
              href: "#",
            },
            {
              label: "Tattoo Design",
              href: "#",
            },
            {
              label: "Storyboards",
              href: "#",
            },
          ],
        },
      ],
      [
        {
          title: "Web & App Design",
          list: [
            {
              label: "Website Design",
              href: "#",
            },
            {
              label: "App Design",
              href: "#",
            },
            {
              label: "UX Design",
              href: "#",
            },
            {
              label: "Landing Page Design",
              href: "#",
            },
            {
              label: "Icon Design",
              href: "#",
            },
          ],
        },
        {
          title: "Marketing Design",
          list: [
            {
              label: "Social Media Design",
              href: "#",
            },
            {
              label: "Email Design",
              href: "#",
            },
            {
              label: "Web Banners",
              href: "#",
            },
            {
              label: "Signage Design",
              href: "#",
            },
          ],
        },
        {
          title: "Packaging & Covers",
          list: [
            {
              label: "Packaging & Label Design",
              href: "#",
            },
            {
              label: "Book Design",
              href: "#",
            },
            {
              label: "Album Cover Design",
              href: "#",
            },
            {
              label: "Podcast Cover Art",
              href: "#",
            },
          ],
        },
      ],
      [
        {
          title: "Visual Design",
          list: [
            {
              label: "Image Editing",
              href: "#",
            },
            {
              label: "Presentation Design",
              href: "#",
            },
            {
              label: "Infographic Design",
              href: "#",
            },
            {
              label: "Vector Tracing",
              href: "#",
            },
            {
              label: "Resume Design",
              href: "#",
            },
          ],
        },
        {
          title: "Architecture & Design",
          list: [
            {
              label: "Architecture & Interior Design",
              href: "#",
            },
            {
              label: "Landscape Design",
              href: "#",
            },
            {
              label: "Building Engineering",
              href: "#",
            },
            {
              label: "Building Information",
              href: "#",
            },
          ],
        },
        {
          title: "Fashion & Jewelry",
          list: [
            {
              label: "Fashion Design",
              href: "#",
            },
            {
              label: "Jewelry Design",
              href: "#",
            },
          ],
        },
      ],
      [
        {
          title: "Print Design",
          list: [
            {
              label: "T-Shirts & Merchandise",
              href: "#",
            },
            {
              label: "Flyer Design",
              href: "#",
            },
            {
              label: "Brochure Design",
              href: "#",
            },
            {
              label: "Poster Design",
              href: "#",
            },
            {
              label: "Catalog Design",
              href: "#",
            },
          ],
        },
        {
          title: "Product & Characters Design",
          list: [
            {
              label: "Industrial & Product Design",
              href: "#",
            },
            {
              label: "Character Modeling",
              href: "#",
            },
            {
              label: "Trade Booth Design",
              href: "#",
            },
          ],
        },
        {
          title: "Miscellaneous",
          list: [
            {
              label: "Logo Maker Tool",
              href: "#",
            },
            {
              label: "Design Advice",
              href: "#",
            },
            {
              label: "Other",
              href: "#",
            },
          ],
        },
      ],
    ],
  },
  {
    name: "Digital Marketing",
    structured: false,
    linksList: [
      [
        {
          label: "Social Media Marketing",
          href: "#",
        },
        {
          label: "Social Media Advertising",
          href: "#",
        },
        {
          label: "Search Engine Optimization (SEO)",
          href: "#",
        },
        {
          label: "Local SEO",
          href: "#",
        },
        {
          label: "Marketing Strategy",
          href: "#",
        },
        {
          label: "Public Relations",
          href: "#",
        },
        {
          label: "Guest Posting",
          href: "#",
        },
        {
          label: "Video Marketing",
          href: "#",
        },
        {
          label: "Email Marketing",
          href: "#",
        },
        {
          label: "Web Analytics",
          href: "#",
        },
        {
          label: "Text Message Marketing",
          href: "#",
        },
        {
          label: "Crowdfunding",
          href: "#",
        },
      ],
      [
        {
          label: "Marketing Advice",
          href: "#",
        },
        {
          label: "Search Engine Marketing (SEM)",
          href: "#",
        },
        {
          label: "Display Advertising",
          href: "#",
        },
        {
          label: "E-commerce Marketing",
          href: "#",
        },
        {
          label: "Influencer Marketing",
          href: "#",
        },
        {
          label: "Community Management",
          href: "#",
        },
        {
          label: "Mobile App Marketing",
          href: "#",
        },
        {
          label: "Music Promotion",
          href: "#",
        },
        {
          label: "Book & eBook Marketing",
          href: "#",
        },
        {
          label: "Podcast Marketing",
          href: "#",
        },
        {
          label: "Affiliate Marketing",
          href: "#",
        },
        {
          label: "Other",
          href: "#",
        },
      ],
    ],
  },
  {
    name: "Writing & Translation",
    structured: false,
    linksList: [
      [
        {
          label: "Articles & Blog Posts",
          href: "#",
        },
        {
          label: "Translation",
          href: "#",
        },
        {
          label: "Proofreading & Editing",
          href: "#",
        },
        {
          label: "Resume Writing",
          href: "#",
        },
        {
          label: "Cover Letters",
          href: "#",
        },
        {
          label: "LinkedIn Profiles",
          href: "#",
        },
        {
          label: "Ad Copy",
          href: "#",
        },
        {
          label: "Sales Copy",
          href: "#",
        },
        {
          label: "Social Media Copy",
          href: "#",
        },
        {
          label: "Email Copy",
          href: "#",
        },
        {
          label: "Case Studies",
          href: "#",
        },
      ],
      [
        {
          label: "Book & eBook Writing",
          href: "#",
        },
        {
          label: "Book Editing",
          href: "#",
        },
        {
          label: "Scriptwriting",
          href: "#",
        },
        {
          label: "Beta Reading",
          href: "#",
        },
        {
          label: "Creative Writing",
          href: "#",
        },
        {
          label: "Brand Voice & Tone",
          href: "#",
        },
        {
          label: "Speechwriting",
          href: "#",
        },
        {
          label: "eLearning Content ",
          href: "#",
        },
        {
          label: "Development",
          href: "#",
        },
        {
          label: "Technical Writing",
          href: "#",
        },
        {
          label: "UX Writing",
          href: "#",
        },
      ],
      [
        {
          label: "Articles & Blog Posts",
          href: "#",
        },
        {
          label: "Translation",
          href: "#",
        },
        {
          label: "Proofreading & Editing",
          href: "#",
        },
        {
          label: "Resume Writing",
          href: "#",
        },
        {
          label: "Cover Letters",
          href: "#",
        },
        {
          label: "LinkedIn Profiles",
          href: "#",
        },
        {
          label: "Ad Copy",
          href: "#",
        },
        {
          label: "Sales Copy",
          href: "#",
        },
        {
          label: "Social Media Copy",
          href: "#",
        },
        {
          label: "Email Copy",
          href: "#",
        },
        {
          label: "Case Studies",
          href: "#",
        },
      ],
    ],
  },
  {
    name: "Video & Animation",
    structured: false,
    linksList: [
      [
        {
          label: "Video Editing",
          href: "#",
        },
        {
          label: "Video Ads & Commercials",
          href: "#",
        },
        {
          label: "Animated Explainers",
          href: "#",
        },
        {
          label: "Character Animation",
          href: "#",
        },
        {
          label: "Music Videos",
          href: "#",
        },
        {
          label: "Logo Animation",
          href: "#",
        },
        {
          label: "Lottie & Web Animation",
          href: "#",
        },
        {
          label: "Intro & Outro Videos",
          href: "#",
        },
        {
          label: "Visual Effects",
          href: "#",
        },
        {
          label: "Rigging",
          href: "#",
        },
        {
          label: "Subtitles & Captions",
          href: "#",
        },
        {
          label: "App & Website Previews",
          href: "#",
        },
        {
          label: "3D Product Animation",
          href: "#",
        },
      ],
      [
        {
          label: "Social Media Videos",
          href: "#",
        },
        {
          label: "E-Commerce Product Videos",
          href: "#",
        },
        {
          label: "Spokesperson Videos",
          href: "#",
        },
        {
          label: "Animated GIFs",
          href: "#",
        },
        {
          label: "Unboxing Videos",
          href: "#",
        },
        {
          label: "Corporate Videos",
          href: "#",
        },
        {
          label: "Slideshow Videos",
          href: "#",
        },
        {
          label: "Crowdfunding Videos ",
          href: "#",
        },
        {
          label: "Meditation Videos",
          href: "#",
        },
        {
          label: "Videographers",
          href: "#",
        },
        {
          label: "Filmed Video Production",
          href: "#",
        },
        {
          label: "Live Action Explainers",
          href: "#",
        },
        {
          label: "Game Trailers",
          href: "#",
        },
      ],
      [
        {
          label: "Book Trailers",
          href: "#",
        },
        {
          label: "NFT Animation",
          href: "#",
        },
        {
          label: "Animation for Streamers ",
          href: "#",
        },
        {
          label: "Animation for Kids",
          href: "#",
        },
        {
          label: "Article to Video",
          href: "#",
        },
        {
          label: "Real Estate Promos",
          href: "#",
        },
        {
          label: "eLearning Video Production",
          href: "#",
        },
        {
          label: "Video Templates Editing",
          href: "#",
        },
        {
          label: "Screencasting Videos",
          href: "#",
        },
        {
          label: "Video Advice",
          href: "#",
        },
      ],
    ],
  },
  {
    name: "Music & Audio",
    structured: false,
    linksList: [
      [
        {
          label: "Video Editing",
          href: "#",
        },
        {
          label: "Video Ads & Commercials",
          href: "#",
        },
        {
          label: "Animated Explainers",
          href: "#",
        },
        {
          label: "Character Animation",
          href: "#",
        },
        {
          label: "Music Videos",
          href: "#",
        },
        {
          label: "Logo Animation",
          href: "#",
        },
        {
          label: "Lottie & Web Animation",
          href: "#",
        },
        {
          label: "Intro & Outro Videos",
          href: "#",
        },
        {
          label: "Visual Effects",
          href: "#",
        },
        {
          label: "Rigging",
          href: "#",
        },
        {
          label: "Subtitles & Captions",
          href: "#",
        },
        {
          label: "App & Website Previews",
          href: "#",
        },
        {
          label: "3D Product Animation",
          href: "#",
        },
      ],
      [
        {
          label: "Social Media Videos",
          href: "#",
        },
        {
          label: "E-Commerce Product Videos",
          href: "#",
        },
        {
          label: "Spokesperson Videos",
          href: "#",
        },
        {
          label: "Animated GIFs",
          href: "#",
        },
        {
          label: "Unboxing Videos",
          href: "#",
        },
        {
          label: "Corporate Videos",
          href: "#",
        },
        {
          label: "Slideshow Videos",
          href: "#",
        },
        {
          label: "Crowdfunding Videos ",
          href: "#",
        },
        {
          label: "Meditation Videos",
          href: "#",
        },
        {
          label: "Videographers",
          href: "#",
        },
        {
          label: "Filmed Video Production",
          href: "#",
        },
        {
          label: "Live Action Explainers",
          href: "#",
        },
        {
          label: "Game Trailers",
          href: "#",
        },
      ],
      [
        {
          label: "Book Trailers",
          href: "#",
        },
        {
          label: "NFT Animation",
          href: "#",
        },
        {
          label: "Animation for Streamers ",
          href: "#",
        },
        {
          label: "Animation for Kids",
          href: "#",
        },
        {
          label: "Article to Video",
          href: "#",
        },
        {
          label: "Real Estate Promos",
          href: "#",
        },
        {
          label: "eLearning Video Production",
          href: "#",
        },
        {
          label: "Video Templates Editing",
          href: "#",
        },
        {
          label: "Screencasting Videos",
          href: "#",
        },
        {
          label: "Video Advice",
          href: "#",
        },
      ],
    ],
  },
  {
    name: "Programming & Tech",
    structured: false,
    linksList: [
      [
        {
          label: "Video Editing",
          href: "#",
        },
        {
          label: "Video Ads & Commercials",
          href: "#",
        },
        {
          label: "Animated Explainers",
          href: "#",
        },
        {
          label: "Character Animation",
          href: "#",
        },
        {
          label: "Music Videos",
          href: "#",
        },
        {
          label: "Logo Animation",
          href: "#",
        },
        {
          label: "Lottie & Web Animation",
          href: "#",
        },
        {
          label: "Intro & Outro Videos",
          href: "#",
        },
        {
          label: "Visual Effects",
          href: "#",
        },
        {
          label: "Rigging",
          href: "#",
        },
        {
          label: "Subtitles & Captions",
          href: "#",
        },
        {
          label: "App & Website Previews",
          href: "#",
        },
        {
          label: "3D Product Animation",
          href: "#",
        },
      ],
      [
        {
          label: "Social Media Videos",
          href: "#",
        },
        {
          label: "E-Commerce Product Videos",
          href: "#",
        },
        {
          label: "Spokesperson Videos",
          href: "#",
        },
        {
          label: "Animated GIFs",
          href: "#",
        },
        {
          label: "Unboxing Videos",
          href: "#",
        },
        {
          label: "Corporate Videos",
          href: "#",
        },
        {
          label: "Slideshow Videos",
          href: "#",
        },
        {
          label: "Crowdfunding Videos ",
          href: "#",
        },
        {
          label: "Meditation Videos",
          href: "#",
        },
        {
          label: "Videographers",
          href: "#",
        },
        {
          label: "Filmed Video Production",
          href: "#",
        },
        {
          label: "Live Action Explainers",
          href: "#",
        },
        {
          label: "Game Trailers",
          href: "#",
        },
      ],
      [
        {
          label: "Book Trailers",
          href: "#",
        },
        {
          label: "NFT Animation",
          href: "#",
        },
        {
          label: "Animation for Streamers ",
          href: "#",
        },
        {
          label: "Animation for Kids",
          href: "#",
        },
        {
          label: "Article to Video",
          href: "#",
        },
        {
          label: "Real Estate Promos",
          href: "#",
        },
        {
          label: "eLearning Video Production",
          href: "#",
        },
        {
          label: "Video Templates Editing",
          href: "#",
        },
        {
          label: "Screencasting Videos",
          href: "#",
        },
        {
          label: "Video Advice",
          href: "#",
        },
      ],
    ],
  },
  {
    name: "Business",
    structured: false,
    linksList: [
      [
        {
          label: "Video Editing",
          href: "#",
        },
        {
          label: "Video Ads & Commercials",
          href: "#",
        },
        {
          label: "Animated Explainers",
          href: "#",
        },
        {
          label: "Character Animation",
          href: "#",
        },
        {
          label: "Music Videos",
          href: "#",
        },
        {
          label: "Logo Animation",
          href: "#",
        },
        {
          label: "Lottie & Web Animation",
          href: "#",
        },
        {
          label: "Intro & Outro Videos",
          href: "#",
        },
        {
          label: "Visual Effects",
          href: "#",
        },
        {
          label: "Rigging",
          href: "#",
        },
        {
          label: "Subtitles & Captions",
          href: "#",
        },
        {
          label: "App & Website Previews",
          href: "#",
        },
        {
          label: "3D Product Animation",
          href: "#",
        },
      ],
      [
        {
          label: "Social Media Videos",
          href: "#",
        },
        {
          label: "E-Commerce Product Videos",
          href: "#",
        },
        {
          label: "Spokesperson Videos",
          href: "#",
        },
        {
          label: "Animated GIFs",
          href: "#",
        },
        {
          label: "Unboxing Videos",
          href: "#",
        },
        {
          label: "Corporate Videos",
          href: "#",
        },
        {
          label: "Slideshow Videos",
          href: "#",
        },
        {
          label: "Crowdfunding Videos ",
          href: "#",
        },
        {
          label: "Meditation Videos",
          href: "#",
        },
        {
          label: "Videographers",
          href: "#",
        },
        {
          label: "Filmed Video Production",
          href: "#",
        },
        {
          label: "Live Action Explainers",
          href: "#",
        },
        {
          label: "Game Trailers",
          href: "#",
        },
      ],
      [
        {
          label: "Book Trailers",
          href: "#",
        },
        {
          label: "NFT Animation",
          href: "#",
        },
        {
          label: "Animation for Streamers ",
          href: "#",
        },
        {
          label: "Animation for Kids",
          href: "#",
        },
        {
          label: "Article to Video",
          href: "#",
        },
        {
          label: "Real Estate Promos",
          href: "#",
        },
        {
          label: "eLearning Video Production",
          href: "#",
        },
        {
          label: "Video Templates Editing",
          href: "#",
        },
        {
          label: "Screencasting Videos",
          href: "#",
        },
        {
          label: "Video Advice",
          href: "#",
        },
      ],
    ],
  },
  {
    name: "Lifestyle",
    structured: false,
    linksList: [
      [
        {
          label: "Video Editing",
          href: "#",
        },
        {
          label: "Video Ads & Commercials",
          href: "#",
        },
        {
          label: "Animated Explainers",
          href: "#",
        },
        {
          label: "Character Animation",
          href: "#",
        },
        {
          label: "Music Videos",
          href: "#",
        },
        {
          label: "Logo Animation",
          href: "#",
        },
        {
          label: "Lottie & Web Animation",
          href: "#",
        },
        {
          label: "Intro & Outro Videos",
          href: "#",
        },
        {
          label: "Visual Effects",
          href: "#",
        },
        {
          label: "Rigging",
          href: "#",
        },
        {
          label: "Subtitles & Captions",
          href: "#",
        },
        {
          label: "App & Website Previews",
          href: "#",
        },
        {
          label: "3D Product Animation",
          href: "#",
        },
      ],
      [
        {
          label: "Social Media Videos",
          href: "#",
        },
        {
          label: "E-Commerce Product Videos",
          href: "#",
        },
        {
          label: "Spokesperson Videos",
          href: "#",
        },
        {
          label: "Animated GIFs",
          href: "#",
        },
        {
          label: "Unboxing Videos",
          href: "#",
        },
        {
          label: "Corporate Videos",
          href: "#",
        },
        {
          label: "Slideshow Videos",
          href: "#",
        },
        {
          label: "Crowdfunding Videos ",
          href: "#",
        },
        {
          label: "Meditation Videos",
          href: "#",
        },
        {
          label: "Videographers",
          href: "#",
        },
        {
          label: "Filmed Video Production",
          href: "#",
        },
        {
          label: "Live Action Explainers",
          href: "#",
        },
        {
          label: "Game Trailers",
          href: "#",
        },
      ],
      [
        {
          label: "Book Trailers",
          href: "#",
        },
        {
          label: "NFT Animation",
          href: "#",
        },
        {
          label: "Animation for Streamers ",
          href: "#",
        },
        {
          label: "Animation for Kids",
          href: "#",
        },
        {
          label: "Article to Video",
          href: "#",
        },
        {
          label: "Real Estate Promos",
          href: "#",
        },
        {
          label: "eLearning Video Production",
          href: "#",
        },
        {
          label: "Video Templates Editing",
          href: "#",
        },
        {
          label: "Screencasting Videos",
          href: "#",
        },
        {
          label: "Video Advice",
          href: "#",
        },
      ],
    ],
  },
  {
    name: "Trending",
    structured: false,
    linksList: [
      [
        {
          label: "Video Editing",
          href: "#",
        },
        {
          label: "Video Ads & Commercials",
          href: "#",
        },
        {
          label: "Animated Explainers",
          href: "#",
        },
        {
          label: "Character Animation",
          href: "#",
        },
        {
          label: "Music Videos",
          href: "#",
        },
        {
          label: "Logo Animation",
          href: "#",
        },
        {
          label: "Lottie & Web Animation",
          href: "#",
        },
        {
          label: "Intro & Outro Videos",
          href: "#",
        },
        {
          label: "Visual Effects",
          href: "#",
        },
        {
          label: "Rigging",
          href: "#",
        },
        {
          label: "Subtitles & Captions",
          href: "#",
        },
        {
          label: "App & Website Previews",
          href: "#",
        },
        {
          label: "3D Product Animation",
          href: "#",
        },
      ],
      [
        {
          label: "Social Media Videos",
          href: "#",
        },
        {
          label: "E-Commerce Product Videos",
          href: "#",
        },
        {
          label: "Spokesperson Videos",
          href: "#",
        },
        {
          label: "Animated GIFs",
          href: "#",
        },
        {
          label: "Unboxing Videos",
          href: "#",
        },
        {
          label: "Corporate Videos",
          href: "#",
        },
        {
          label: "Slideshow Videos",
          href: "#",
        },
        {
          label: "Crowdfunding Videos ",
          href: "#",
        },
        {
          label: "Meditation Videos",
          href: "#",
        },
        {
          label: "Videographers",
          href: "#",
        },
        {
          label: "Filmed Video Production",
          href: "#",
        },
        {
          label: "Live Action Explainers",
          href: "#",
        },
        {
          label: "Game Trailers",
          href: "#",
        },
      ],
      [
        {
          label: "Book Trailers",
          href: "#",
        },
        {
          label: "NFT Animation",
          href: "#",
        },
        {
          label: "Animation for Streamers ",
          href: "#",
        },
        {
          label: "Animation for Kids",
          href: "#",
        },
        {
          label: "Article to Video",
          href: "#",
        },
        {
          label: "Real Estate Promos",
          href: "#",
        },
        {
          label: "eLearning Video Production",
          href: "#",
        },
        {
          label: "Video Templates Editing",
          href: "#",
        },
        {
          label: "Screencasting Videos",
          href: "#",
        },
        {
          label: "Video Advice",
          href: "#",
        },
      ],
    ],
  },
];
