import React from "react"
import Swiper from "react-id-swiper"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

// icons
import spotify from "../../../images/icons/socialMedia-colored/spotify-colored.svg"
import facebook from "../../../images/icons/socialMedia-colored/facebook-colored.svg"
import telegram from "../../../images/icons/socialMedia-colored/telegram-colored.svg"
import instagram from "../../../images/icons/socialMedia-colored/instagram-colored.svg"
import patreon from "../../../images/icons/socialMedia-colored/patreon-colored.svg"
import soundcloud from "../../../images/icons/socialMedia-colored/soundcloud-colored.svg"
import twitter from "../../../images/icons/socialMedia-colored/twitter-colored.svg"
import youtube from "../../../images/icons/socialMedia-colored/youtube-colored.svg"

// style
import "./Clubs.scss"

const Clubs = () => {
  // config of swiper
  const params = {
    loop: "true",
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
    },
  }

  // get clubs data from wordpress
  const clubs = useStaticQuery(graphql`
    query {
      allWordpressWpClubs(limit: 5) {
        edges {
          node {
            title
            featured_media {
              source_url
            }
            acf {
              social_medias {
                media_link
                media_type
              }
            }
          }
        }
      }
    }
  `).allWordpressWpClubs.edges

  // switch type to icon
  function type_to_icon(type) {
    switch (type) {
      case "spotify":
        return spotify
      case "facebook":
        return facebook
      case "telegram":
        return telegram
      case "instagram":
        return instagram
      case "patreon":
        return patreon
      case "soundcloud":
        return soundcloud
      case "twitter":
        return twitter
      case "youtube":
        return youtube
      default:
        return
    }
  }

  return (
    <section id="clubs">
      <h2 className={"is-2 serif bold"}>社團</h2>
      <Swiper {...params}>
        {clubs.map(club => (
          <div>
            <div className={"club-card"}>
              {/* cover */}
              <figure>
                <img src={club.node.featured_media.source_url} />
              </figure>

              {/* club info card */}
              <div className={"club-info"}>
                {/* title */}
                <h3 className={"is-3 bold serif"}>{club.node.title}</h3>

                {/* social media */}
                <Container>
                  <Row className={"icons"}>
                    {club.node.acf.social_medias.map(media => (
                      <Col className={"icon col-4 col-sm-3"}>
                        <a href={media.media_link}>
                          <img src={type_to_icon(media.media_type)} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        ))}
      </Swiper>
    </section>
  )
}

export default Clubs