(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f7677be"],{1681:function(t,e,a){},"1e83":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"12"}},[a("v-card",{staticClass:"elevation-12",attrs:{dark:""}},[a("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("v-window-item",{attrs:{value:1}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card-text",{staticClass:"mt-12"},[a("h1",{staticClass:"\n                          text-center\n                          display-2\n                          yellow--text\n                          text--accent-4\n                        "},[t._v(" Atualizar Pelicual ")]),a("v-form",[a("v-text-field",{attrs:{label:"Nombre de la pelicula",name:"filmName","prepend-icon":"mdi-movie",type:"text",color:"yellow accent-4"}})],1)],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center pa-3 mt-n5"},[a("v-btn",{attrs:{rounded:"",outlined:"",color:"yellow accent-4",dark:""}},[t._v("BUSCAR")])],1),a("div",{staticClass:"text-center mt-n5 pa-3"},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[a("v-btn",{attrs:{rounded:"",outlined:"",dark:"",color:"#FFDB58"}},[t._v(" CANCELAR ")])],1)],1)]),a("br")],1),a("v-col",{staticClass:"yellow accent-4",attrs:{cols:"12",md:"4"}},[a("v-card-text",{staticClass:"white--text mt-12"},[a("h1",{staticClass:"text-center display-1"},[t._v("Bienvenido!")]),a("h5",{staticClass:"text-center"},[t._v(" Ingresa los detalles de la nueva pelicuala ")]),a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{rounded:"",outlined:"",dark:""},on:{click:function(e){t.step++}}},[t._v("REGISTRAR PELICULA")])],1)])],1)],1)],1),a("v-window-item",{attrs:{value:2}},[a("v-row",{staticClass:"fill-height"},[a("v-col",{staticClass:"yellow accent-4",attrs:{cols:"12",md:"4"}},[a("v-card-text",{staticClass:"white--text mt-12"},[a("h1",{staticClass:"text-center display-1"},[t._v(" Hola! ")]),a("h5",{staticClass:"text-center"},[t._v(" Si solo quieres actualizar una pelicula existente accede por aqui! ")]),a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{rounded:"",outlined:"",dark:""},on:{click:function(e){t.step--}}},[t._v("ACTUALIZAR PELICULA")])],1)])],1),a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card-text",{staticClass:"mt-12"},[a("h1",{staticClass:"\n                          text-center\n                          display-2\n                          yellow--text\n                          text--accent-4\n                        "},[t._v(" Registrar Nueva Pelicula ")]),a("h4",{staticClass:"text-center mt-4"},[t._v(" Ingresa los detalles de la nueva pelicuala, asegurate de subir una foto de portada. ")]),a("v-form",[a("v-text-field",{attrs:{label:"Titulo",name:"filmTitle","prepend-icon":"mdi-movie-open",type:"text",color:"yellow accent-4"}}),a("v-select",{attrs:{label:"Clasificacion",name:"clasification",items:t.Tipo,"prepend-icon":"mdi-account-filter-outline",color:"yellow accent-4"}}),a("v-combobox",{attrs:{items:t.items,label:"Formato","prepend-icon":"mdi-motion-play",type:"text",color:"yellow accent-4",multiple:"",chips:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),a("v-file-input",{attrs:{accept:"image/*",label:"Portada","prepend-icon":"mdi-camera",color:"yellow accent-4"}}),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-date-picker",{attrs:{range:"",color:"yellow accent-4"},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Estreno y ultima presentacion","prepend-icon":"mdi-calendar",color:"yellow accent-4",readonly:""},model:{value:t.dateRangeText,callback:function(e){t.dateRangeText=e},expression:"dateRangeText"}}),t._v(" model: "+t._s(t.dates)+" ")],1)],1),a("v-combobox",{attrs:{items:t.items2,"search-input":t.search,"hide-selected":"",hint:"Maximum of 5 tags",label:"Idiomas","prepend-icon":"mdi-chat-question",color:"yellow accent-4",multiple:"","persistent-hint":"","small-chips":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(' No results matching "'),a("strong",[t._v(t._s(t.search))]),t._v('". Press '),a("kbd",[t._v("enter")]),t._v(" to create a new one ")])],1)],1)]},proxy:!0}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),a("v-combobox",{attrs:{items:t.items3,"search-input":t.search,"hide-selected":"",hint:"Maximum of 5 tags",label:"Actores","prepend-icon":"mdi-account-star",color:"yellow accent-4",multiple:"","persistent-hint":"","small-chips":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(' No results matching "'),a("strong",[t._v(t._s(t.search))]),t._v('". Press '),a("kbd",[t._v("enter")]),t._v(" to create a new one ")])],1)],1)]},proxy:!0}]),model:{value:t.model2,callback:function(e){t.model2=e},expression:"model2"}}),a("v-textarea",{attrs:{counter:"",label:"Descripcion",name:"descrition","prepend-icon":"mdi-comment",type:"text",color:"yellow accent-3"}})],1),a("br"),a("v-row",{attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center mt-n5 pa-3"},[a("v-btn",{attrs:{rounded:"",outlined:"",color:"yellow accent-4",dark:""}},[t._v("REGISTRAR PELICULA")])],1),a("div",{staticClass:"text-center mt-n5 pa-3"},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[a("v-btn",{attrs:{rounded:"",outlined:"",dark:"",color:"yellow accent-4"}},[t._v(" CANCELAR ")])],1)],1)])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},o=[],s=(a("a15b"),{data:function(){return{step:1,Tipo:["12+","18+","Todo Publico"],select:["2D","3D"],items:["2D","3D","4D","4Dx"],dates:["2021-09-10","2021-09-20"],menu:!1,modal:!1,menu2:!1,items2:["Espanol","Ingles","Frances","Ruso"],model:["Idiomas"],items3:["Denzel Washinton","Keanu Reeves","Johnny Depp","Will Smith"],model2:["Actores"],search:null}},watch:{model:function(t){var e=this;t.length>5&&this.$nextTick((function(){return e.model.pop()}))}},computed:{dateRangeText:function(){return this.dates.join(" ~ ")}},props:{source:String}}),i=s,l=a("2877"),c=a("6544"),r=a.n(c),d=a("7496"),u=a("8336"),p=a("b0af"),m=a("99d9"),v=a("62ad"),h=a("2b5d"),x=a("a523"),f=a("a75b"),w=a("2e4b"),b=a("23a7"),y=a("4bd4"),g=a("da13"),C=a("5d23"),k=a("0fd9"),_=a("b974"),I=a("8654"),R=a("a844"),V=a("f665"),T=a("1e6c"),A=Object(l["a"])(i,n,o,!1,null,null,null);e["default"]=A.exports;r()(A,{VApp:d["a"],VBtn:u["a"],VCard:p["a"],VCardText:m["c"],VCol:v["a"],VCombobox:h["a"],VContainer:x["a"],VContent:f["a"],VDatePicker:w["a"],VFileInput:b["a"],VForm:y["a"],VListItem:g["a"],VListItemContent:C["a"],VListItemTitle:C["b"],VRow:k["a"],VSelect:_["a"],VTextField:I["a"],VTextarea:R["a"],VWindow:V["a"],VWindowItem:T["a"]})},a844:function(t,e,a){"use strict";var n=a("5530"),o=(a("a9e3"),a("1681"),a("8654")),s=a("58df"),i=Object(s["a"])(o["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){o["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-0f7677be.45508717.js.map