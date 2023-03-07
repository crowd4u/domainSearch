<template>
  <div>
    <v-row dense>
        <v-col cols="4">
          <v-text-field label="query" outlined v-model="query"></v-text-field>
        </v-col>
      </v-row>
    <v-card>
      <v-card-title>
        Search by multiple
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table :headers="headers" :items="batch" :items-per-page="-1">
        <template v-slot:[`item.university`]="{ item }">
            {{ item.university }}
        </template>
        <template #item.action="{ item }">
          <v-btn color="primary" @click="searchByAllDomain(item.url)">Search</v-btn>
        </template>
      </v-data-table>
    </v-card>

    <div class="spacing-playground pa-6"></div>

    <v-card>
      <v-card-title>
        Search individually
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search for registered universities" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="domains" :search="search" :items-per-page="-1">
        <template v-slot:[`item.university`]="{ item }">
            <a :href="item.url" target="_blank"> {{ item.university }}</a>
        </template>
        <template #item.action="{ item }">
          <div v-if="item.university.includes('google') === false">
            <v-btn color="primary" @click="searchByDomain(item.url)">Search</v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface domain {
  university: string,
  url: string
}

export default Vue.extend({
  data: () => ({
    query: '',
    search: '',
    headers: [
      {
        text: 'Homepage',
        align: 'start',
        sortable: false,
        value: 'university'
      },
      {
        text: 'search',
        value: 'action'
      }
    ],
    batch: [
      {
        university: 'from Central China Normal University to National Taiwan Normal University',
        url: 'from1to18'
      },
      {
        university: 'from National Taiwan University to Zhengzhou University',
        url: 'from19to36'
      }
    ],
    domains: [
      {
        university: 'Central China Normal University (google translate)',
        url: 'https://imd-ccnu-edu-cn.translate.goog/szdw2/zrjs.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp'
      },
      {
        university: 'Central China Normal University',
        url: 'http://imd.ccnu.edu.cn/szdw2/zrjs.htm'
      },
      {
        university: 'University of the Chinese Academy of Sciences (google translate)',
        url: 'https://www-las-cas-cn.translate.goog/yjsjy2021/dsdw2021/dsjs2021/?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp'
      },
      {
        university: 'University of the Chinese Academy of Sciences',
        url: 'http://www.las.cas.cn/yjsjy2021/dsdw2021/dsjs2021/'
      },
      {
        university: 'Chung-Ang University (google translate)',
        url: 'https://society-cau-ac-kr.translate.goog/class/sub04.asp?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp'
      },
      {
        university: 'Chung-Ang University',
        url: 'http://lis.cau.ac.kr/01_info/info_03a.php'
      },
      {
        university: 'Curtin University',
        url: 'https://www.curtin.edu.au/about/learning-teaching/humanities/school-of-media-creative-arts-and-social-inquiry/our-people/'
      },
      {
        university: 'Ewha Womans University (google translate)',
        url: 'https://cms-ewha-ac-kr.translate.goog/user/indexSub.action?codyMenuSeq=6335770&siteId=elis1959&menuUIType=top&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp'
      },
      {
        university: 'Ewha Womans University',
        url: 'https://cms.ewha.ac.kr/user/indexSub.action?codyMenuSeq=6335770&siteId=elis1959&menuUIType=top'
      },
      {
        university: 'Hong Kong, University of',
        url: 'https://web.edu.hku.hk/unit/human-communication-development-and-information-sciences/Staff%20List'
      },
      {
        university: 'Jeonbuk National University',
        url: 'https://wz3.jbnu.ac.kr/liseng/11004/subview.do'
      },
      {
        university: 'Jilin University',
        url: 'http://gl.jlu.edu.cn/English/Faculty__Research/Faculty.htm'
      },
      {
        university: 'Khon Kaen University',
        url: 'https://home.kku.ac.th/icm/main/index.php/teachers-en'
      },
      {
        university: 'Kyungpook National University (google translate)',
        url: 'https://widit-knu-ac-kr.translate.goog/lis/Professors.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp'
      },
      {
        university: 'Kyungpook National University',
        url: 'http://widit.knu.ac.kr/lis/Professors.htm'
      },
      {
        university: 'Kyushu University',
        url: 'https://www.ifs.kyushu-u.ac.jp/eng/lss/lss-eng-01/lss-eng-01-04/'
      },
      {
        university: 'Melbourne, University of',
        url: 'https://cis.unimelb.edu.au/#people'
      },
      {
        university: 'Monash University',
        url: 'https://www.monash.edu/it/about-us/our-people'
      },
      {
        university: 'Multimedia University (MMU)',
        url: 'https://www.mmu.edu.my/fci/prof-assoc-prof/'
      },
      {
        university: 'Nanjing University',
        url: 'https://im.nju.edu.cn/imeng/36559/list.htm'
      },
      {
        university: 'Nanjing University of Science and Technology',
        url: 'https://english.njust.edu.cn/2d/40/c600a273728/page.htm'
      },
      {
        university: 'Nankai University',
        url: 'https://bs.nankai.edu.cn/InformationResourcesManagement/list.htm'
      },
      {
        university: 'National Chengchi University',
        url: 'https://ncculias.nccu.edu.tw/eng/PageStaffing?fid=10075'
      },
      {
        university: 'National Taiwan Normal University',
        url: 'https://www.glis.ntnu.edu.tw/index.php/en/faculty-2/'
      },
      {
        university: 'National Taiwan University',
        url: 'https://www.lis.ntu.edu.tw/english/?page_id=71'
      },
      {
        university: 'Peking University (google translate)',
        url: 'https://www-im-pku-edu-cn.translate.goog/szll/syry/index.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp'
      },
      {
        university: 'Peking University',
        url: 'http://www.im.pku.edu.cn/szll/syry/index.htm'
      },
      {
        university: 'Philippines, University of the',
        url: 'https://upslis.info/faculty'
      },
      {
        university: 'Renmin University of China',
        url: 'http://sirm.ruc.edu.cn/people/faculty'
      },
      {
        university: 'Seoul National University',
        url: 'https://convergence.snu.ac.kr/page/professor.php?lang=en'
      },
      {
        university: 'Shanghai University (google translate)',
        url: 'https://ischool-shu-edu-cn.translate.goog/xscy/zyjs.htm?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp'
      },
      {
        university: 'Shanghai University',
        url: 'https://ischool.shu.edu.cn/xscy/zyjs.htm'
      },
      {
        university: 'Soochow University (google translate)',
        url: 'https://shxy-suda-edu-cn.translate.goog/15323/list.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp'
      },
      {
        university: 'Soochow University',
        url: 'http://shxy.suda.edu.cn/15323/list.htm'
      },
      {
        university: 'Sukhothai Thammathirat Open University',
        url: 'https://liberalarts.stou.ac.th/eng/'
      },
      {
        university: 'Sun Yat-sen University, Guangzhou',
        url: 'https://ischool.sysu.edu.cn/en/staff-information/academic'
      },
      {
        university: 'Sungkyunkwan University',
        url: 'https://liberalarts.skku.edu/eng_liberal/intro/faculty_library.do'
      },
      {
        university: 'Te Herenga Waka -- Victoria University of Wellington',
        url: 'https://www.wgtn.ac.nz/business/about/staff'
      },
      {
        university: 'Teknologi MARA, Universiti',
        url: 'https://fim.uitm.edu.my/index.php/corporate/staff-directory/academic-staff'
      },
      {
        university: 'Tsukuba, University of',
        url: 'http://www.slis.tsukuba.ac.jp/grad/english/research/staff_e/'
      },
      {
        university: 'Universitas Indonesia',
        url: 'https://scholar.ui.ac.id/en/organisations/department-of-library-and-information-science/persons/'
      },
      {
        university: 'Waikato, University of',
        url: 'https://www.cms.waikato.ac.nz/people'
      },
      {
        university: 'Wuhan University',
        url: 'http://sim.whu.edu.cn/English/People/Faculty.htm'
      },
      {
        university: 'Yonsei University',
        url: 'https://yonsei.pure.elsevier.com/en/organisations/department-of-library-and-information-science/persons/'
      },
      {
        university: 'Zhengzhou University(google translate)',
        url: 'https://www5-zzu-edu-cn.translate.goog/xxgl/info/1011/1476.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp4'
      },
      {
        university: 'Zhengzhou University',
        url: 'http://www5.zzu.edu.cn/xxgl/info/1011/1476.htm'
      }
    ]
  }),
  methods: {
    createForm (domainObj: domain[]) {
      var form: HTMLFormElement = document.createElement('form')
      form.setAttribute('action', 'https://www.google.com/search')
      form.setAttribute('method', 'get')
      form.setAttribute('target', '_blank')
      form.style.display = 'none'
      document.body.appendChild(form)

      var siteQuery = 'site:'
      const last = Object.values(domainObj).pop()
      for (const domain of Object.values(domainObj)) {
        if (domain.url === '') {
          continue
        } else if (domain.url !== last?.url) {
          siteQuery += domain.url + ' OR site:'
        } else {
          siteQuery += domain.url
        }
      }
      const query: string = '( ' + siteQuery + ' ) ' + this.query
      var inputQuery: HTMLInputElement = document.createElement('input')
      inputQuery.setAttribute('type', 'text')
      inputQuery.setAttribute('name', 'query')
      inputQuery.setAttribute('value', query)
      form.appendChild(inputQuery)
      form.submit()
    },
    searchByDomain (domain: string) {
      const url = `https://www.google.com/search?q=site:${domain} ${this.query}`
      window.open(url, '_blank')
    },
    searchByAllDomain (flag: string) {
      if (flag === 'from1to18') {
        const obj = [] as domain[]
        for (let i = this.domains.findIndex(e => e.university === 'Central China Normal University'); i < this.domains.length; i++) {
          if (this.domains[i].url.indexOf('translate.goog') === -1) {
            if (obj.length < 19) {
              obj.push(this.domains[i])
            } else {
              break
            }
          }
        }
        this.createForm(obj)
      } else if (flag === 'from19to36') {
        const obj = [] as domain[]
        for (let i = this.domains.findIndex(e => e.university === 'National Taiwan University'); i < this.domains.length; i++) {
          if (this.domains[i].url.indexOf('translate.goog') === -1) {
            if (obj.length < 18) {
              obj.push(this.domains[i])
            } else {
              break
            }
          }
        }
        this.createForm(obj)
      }
    }
  }
})
</script>
