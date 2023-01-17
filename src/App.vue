<template>
  <div id="app">
    <v-container class="container">
      <v-row dense>
        <v-col cols="16">
          <v-text-field label="検索キーワード" outlined v-model="query"></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="space-around">
        <v-btn class="button" v-for="(domain, university) of domainObj" :key="domain" @click="
                      searchByDomain(domain)
                  ">
          {{ university }}
        </v-btn>
      </v-row>
      <v-btn
        class="button"
        @click="
            searchByAllDomain()
        "
        >
          全てのドメインで同時に検索する
      </v-btn>
  </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    query: '' as string,
    domainList: ['fusioncomplab.org', 'tsukuba.ac.jp', 'informatics.tsukuba.ac.jp', 'scholar.google.co.jp'] as string[],
    domainObj: {
      'Central China Normal University': 'https://imd-ccnu-edu-cn.translate.goog/szdw2/zrjs.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp',
      'Chinese Academy of Sciences, University of the': 'https://www-las-cas-cn.translate.goog/yjsjy2021/dsdw2021/dsjs2021/?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp',
      'Chung-Ang University': 'https://society-cau-ac-kr.translate.goog/class/sub04.asp?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp',
      'Curtin University': 'https://www.curtin.edu.au/about/learning-teaching/humanities/school-of-media-creative-arts-and-social-inquiry/our-people/',
      'Ewha Womans University': 'https://cms-ewha-ac-kr.translate.goog/user/indexSub.action?codyMenuSeq=6335770&siteId=elis1959&menuUIType=top&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp',
      'Hong Kong, University of': 'https://web.edu.hku.hk/unit/human-communication-development-and-information-sciences/Staff%20List',
      'Jeonbuk National University': 'https://wz3.jbnu.ac.kr/liseng/11004/subview.do',
      'Jilin University': 'http://gl.jlu.edu.cn/English/Faculty__Research/Faculty.htm',
      'Khon Kaen University': 'https://home.kku.ac.th/icm/main/index.php/teachers-en',
      'Kyungpook National University': 'https://widit-knu-ac-kr.translate.goog/lis/Professors.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp',
      'Kyushu University': 'https://www.ifs.kyushu-u.ac.jp/eng/lss/lss-eng-01/lss-eng-01-04/',
      'Melbourne, University of': 'https://cis.unimelb.edu.au/#people',
      'Monash University': 'https://www.monash.edu/it/about-us/our-people',
      'Multimedia University (MMU)': 'https://www.mmu.edu.my/fci/prof-assoc-prof/',
      'Nanjing University': 'https://im.nju.edu.cn/imeng/36559/list.htm',
      'Nanjing University of Science and Technology': 'https://english.njust.edu.cn/2d/40/c600a273728/page.htm',
      'Nankai University': 'https://bs.nankai.edu.cn/InformationResourcesManagement/list.htm',
      'National Chengchi University': 'https://ncculias.nccu.edu.tw/eng/PageStaffing?fid=10075',
      'National Taiwan Normal University': 'https://www.glis.ntnu.edu.tw/index.php/en/faculty-2/',
      'National Taiwan University': 'https://www.lis.ntu.edu.tw/english/?page_id=71',
      'Peking University': 'https://www-im-pku-edu-cn.translate.goog/szll/syry/index.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp',
      'Philippines, University of the': 'https://upslis.info/faculty',
      'Renmin University of China': 'http://sirm.ruc.edu.cn/people/faculty',
      'Seoul National University': 'https://convergence.snu.ac.kr/page/professor.php?lang=en',
      'Shanghai University': 'https://ischool-shu-edu-cn.translate.goog/xscy/zyjs.htm?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp',
      'Soochow University': 'https://shxy-suda-edu-cn.translate.goog/15323/list.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp',
      'Sukhothai Thammathirat Open University': 'https://liberalarts.stou.ac.th/eng/',
      'Sun Yat-sen University, Guangzhou': 'https://ischool.sysu.edu.cn/en/staff-information/academic',
      'Sungkyunkwan University': 'https://liberalarts.skku.edu/eng_liberal/intro/faculty_library.do',
      'Te Herenga Waka -- Victoria University of Wellington': 'https://www.wgtn.ac.nz/business/about/staff',
      'Teknologi MARA, Universiti': 'https://fim.uitm.edu.my/index.php/corporate/staff-directory/academic-staff',
      'Tsukuba, University of': 'http://www.slis.tsukuba.ac.jp/grad/english/research/staff_e/',
      'Universitas Indonesia': 'https://scholar.ui.ac.id/en/organisations/department-of-library-and-information-science/persons/',
      'Waikato, University of': 'https://www.cms.waikato.ac.nz/people',
      'Wuhan University': 'http://sim.whu.edu.cn/English/People/Faculty.htm',
      'Yonsei University': 'https://yonsei.pure.elsevier.com/en/organisations/department-of-library-and-information-science/persons/',
      'Zhengzhou University': 'https://www5-zzu-edu-cn.translate.goog/xxgl/info/1011/1476.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp4'
    }
  }),
  methods: {
    searchByDomain (domain:string) {
      var form:HTMLFormElement = document.createElement('form')
      form.setAttribute('action', 'https://www.google.com/search')
      form.setAttribute('method', 'get')
      form.setAttribute('target', '_blank')
      form.style.display = 'none'
      document.body.appendChild(form)

      if (this.query !== undefined) {
        var inputDomain:HTMLInputElement = document.createElement('input')
        inputDomain.setAttribute('type', 'hidden')
        inputDomain.setAttribute('name', 'as_sitesearch')
        inputDomain.setAttribute('value', domain)
        form.appendChild(inputDomain)

        var inputQuery:HTMLInputElement = document.createElement('input')
        inputQuery.setAttribute('type', 'text')
        inputQuery.setAttribute('name', 'query')
        inputQuery.setAttribute('value', this.query)
        form.appendChild(inputQuery)
      }
      form.submit()
    },
    searchByAllDomain () {
      var form:HTMLFormElement = document.createElement('form')
      form.setAttribute('action', 'https://www.google.com/search')
      form.setAttribute('method', 'get')
      form.setAttribute('target', '_blank')
      form.style.display = 'none'
      document.body.appendChild(form)

      if (this.query !== undefined) {
        var siteQuery = 'site:'
        const last = Object.values(this.domainObj).pop()
        for (const domain of Object.values(this.domainObj)) {
          if (domain !== last) {
            siteQuery += domain + ' OR site:'
          } else {
            siteQuery += ' ' + domain
          }
        }
        const query: string = '( ' + siteQuery + ' ) ' + this.query
        var inputQuery:HTMLInputElement = document.createElement('input')
        inputQuery.setAttribute('type', 'text')
        inputQuery.setAttribute('name', 'query')
        inputQuery.setAttribute('value', query)
        form.appendChild(inputQuery)
        form.submit()
      }
    }
  }
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.button {
  margin: 20px;
}
</style>
