import React from "react"
import renderer from "react-test-renderer"
import { newsSliderPure } from "./NewsSlider"

describe("Section/NewsSlider", () => {
  it("renders correctly", () => {
    const news = [
      {
        node: {
          title:
            "他不是「新聞神話」──韓國傳奇主播孫石熙如何帶領公眾思考，產生改變？",
          acf: {
            image: {
              source_url:
                "https://wordpress.hsnu.org/wp-content/uploads/2020/03/20191210155653-3e9da990d7b73480242f9356c37659e1-desktop.jpg",
            },
            link:
              "https://www.twreporter.org/a/bookreview-recommendation-sohn-suk-hee",
          },
        },
      },
      {
        node: {
          title: "海苔熊／讀《成為一個新人》，重新思考精神疾病「康復」的意義",
          acf: {
            image: {
              source_url:
                "https://wordpress.hsnu.org/wp-content/uploads/2020/03/20191215234815-e30f042653064c821f5cf69a8db705de-desktop.jpg",
            },
            link:
              "https://www.twreporter.org/a/bookreview-recommendation-be-a-new-creation-haitaibear",
          },
        },
      },
      {
        node: {
          title: "【投書】戒菸新希望？菸害新風暴？電子菸防制的考驗與思考",
          acf: {
            image: {
              source_url:
                "https://wordpress.hsnu.org/wp-content/uploads/2020/03/20191225102911-41f3c1090c05229f3328d794b7fe63ec-desktop.jpg",
            },
            link:
              "https://www.twreporter.org/a/opinion-electronic-cigarette-problems-tobacco-industry-never-say",
          },
        },
      },
      {
        node: {
          title: "野島剛／日本如何看2020台灣大選？解析日媒選前社論關注焦點",
          acf: {
            image: {
              source_url:
                "https://wordpress.hsnu.org/wp-content/uploads/2020/03/20191230132946-35e29933c2a77d4f3891e6ff41056d95-desktop.jpg",
            },
            link:
              "https://www.twreporter.org/a/opinion-2020-election-japan-newspaper-editorial",
          },
        },
      },
    ]

    const tree = renderer.create(<newsSliderPure news={news} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
