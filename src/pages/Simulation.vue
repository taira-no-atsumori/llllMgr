<template>
  <v-container fluid class="px-1 py-2">
    <v-row no-gutters class="mb-5">
      <v-col cols="12" class="px-1 pb-2">
        <h1>SIMULATION（おためし版）</h1>
      </v-col>
      <v-col cols="12" class="pb-2">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
            <v-expansion-panel-text>
              デッキシミュレーションツールです。<br />
              現在は、以下の機能に対応しております。<br />
              <br />

              <b>デッキの編集</b><br />
              「NO
              IMAGE」をクリック（タップ）すると、編成できるカード一覧が表示されます。<br />
              カードを選択すると、デッキが完了します。<br />
              「CARD LISTのパラメータを反映する」をONにすると、CARD
              LISTのパラメータがデッキに反映されます。<br />
              <br />

              <b>デッキを新規作成</b><br />
              新しいデッキを作成します。<br />
              <br />

              <b>デッキ名の変更</b><br />
              現在選択中のデッキ名を変更できます。<br />
              <br />

              <b>デッキ選択</b><br />
              デッキリストを開き、デッキを選択できます。<br />
              デッキ名の下のボタンは、以下のような機能となっております。<br />
              <br />

              <ul>
                <li><u>1. デッキ選択</u></li>
                <li>
                  <ul class="ml-4">
                    <li>クリック（タップ）したデッキを表示します。</li>
                  </ul>
                </li>
                <li><u>2. デッキコピー</u></li>
                <li>
                  <ul class="ml-4">
                    <li>
                      1回目のクリック（タップ）で、コピー元のデッキを選択します。
                    </li>
                    <li>
                      2回目のクリック（タップ）で、コピー先のデッキにコピー元のデッキをコピーします。
                    </li>
                    <li>
                      なお、1回目にクリック（タップ）したコピーボタンをもう一度クリック（タップ）すると、コピーをキャンセルします。
                    </li>
                    <li>また、デッキ名はコピーされません。</li>
                  </ul>
                </li>
                <li><u>3. デッキ入れ替え</u></li>
                <li>
                  <ul class="ml-4">
                    <li>
                      1回目のクリック（タップ）で、入れ替え元のデッキを選択します。
                    </li>
                    <li>2回目のクリック（タップ）で、デッキを入れ替えます。</li>
                    <li>
                      なお、1回目にクリック（タップ）した入れ替えボタンをもう一度クリック（タップ）すると、入れ替えをキャンセルします。
                    </li>
                  </ul>
                </li>
                <li><u>4. デッキ削除</u></li>
                <li>
                  <ul class="ml-4">
                    <li>クリック（タップ）したデッキを削除します。</li>
                    <li>
                      なお、確認モーダルは出現しませんので、ご注意ください。
                    </li>
                  </ul>
                </li>
              </ul>
              <br />

              <b>デッキリセット</b><br />
              現在編集中のデッキをリセットします。<br />
              <br />

              <b>エースカード設定</b><br />
              カードを編成すると、カードの左に
              <v-icon color="grey-lighten-2">mdi-crown</v-icon>
              が表示されます。<br />
              デッキ名の下のボタンは、以下のような機能となっております。<br />
              それをクリック（タップ）すると、アイコンが
              <v-icon color="yellow-accent-4">mdi-crown</v-icon>
              に変化し、エースカードに設定されます。<br />
              <br />

              <b>その他</b><br />
              このページは現在PCでの利用を想定しています。<br />
              スマホ対応は今後行います。<br />
              <br />
              おためし版では編成の保存に対応していないため、リロードすると作成した編成は消えてしまいます。<br />
              遺しておきたい場合は、スクショを撮るなどの対応をお願いします。<br />
              <!-- ライブグランプリの獲得グランプリPt.の計算ツールです。<br />
              <br />
              <b>使い方</b><br />
              Season Fan Lv.は全員分入力してください。<br />
              (アプリ内上部のユーザーネームをタップして、Fan
              Lv.の右にあるアイコンをタップすると確認できます)<br />
              解放Lv.は、その楽曲の歌唱メンバー(リーダーを含む)のみ入力してください。<br />
              解放Lv.の変更方法は、<br />
              ・名前の横にあるチェックマークにチェックを入れる<br />
              ・歌唱メンバーのメインスタイルに設定しているカードのレア度を設定<br />
              で該当メンバーの解放Lv.を変更できるようになります。<br />
              <br />
              <b>注意事項</b><br />
              ※この機能は暫定機能です。今後のアップデートでリニューアルします。 -->
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col v-if="store.deck.length === 0" cols="12">
        <v-row no-gutters class="mt-5">
          <v-col cols="2" class="d-none d-sm-block" />
          <v-col cols="12" sm="3">
            <v-card
              class="py-10 py-sm-16 text-center mb-10 mb-sm-0"
              color="light-blue"
              @click="makeNewDeck(store)"
            >
              <v-icon icon="mdi-plus" size="x-large" class="mb-2" />
              <p class="text-h5">デッキを新規作成</p>
            </v-card>
          </v-col>
          <v-col cols="2" class="d-none d-sm-block" />
          <v-col cols="12" sm="3">
            <v-card
              class="py-10 py-sm-16 text-center"
              color="indigo"
              :disabled="store.selectDeck === undefined"
              @click="dialog.deckList = true"
            >
              <v-icon icon="mdi-folder-open" size="x-large" class="mb-2" />
              <p class="text-h5">デッキ選択</p>
            </v-card>
          </v-col>
          <v-col cols="2" class="d-none d-sm-block" />
        </v-row>
      </v-col>
      <v-col v-else cols="12">
        <v-row no-gutters class="mb-3">
          <v-col cols="12" sm="11">
            <v-btn
              color="light-blue"
              prepend-icon="mdi-plus"
              text="デッキを新規作成"
              class="mr-2 mb-2"
              @click="
                makeNewDeck(store);
                snackbar.makeDeck = true;
              "
            />
            <v-btn
              prepend-icon="mdi-folder-open"
              color="indigo"
              text="デッキ選択"
              class="mr-2 mb-2"
              @click="dialog.deckList = true"
            />
            <v-btn
              prepend-icon="mdi-rotate-right"
              color="red"
              text="デッキリセット"
              class="mr-2 mb-2"
              @click="makeNewDeck(store, true)"
            />
            <v-btn
              v-if="false"
              prepend-icon="mdi-crown"
              color="yellow"
              text="エースカード設定"
              class="mr-2 mb-2"
              :disabled="
                countDefaultCard(store).main +
                  countDefaultCard(store).leaves ===
                18
              "
            />
            <v-btn
              v-if="false"
              prepend-icon="mdi-database-sync"
              color="yellow"
              text="最新化反映"
              class="mr-2 mb-2"
            />
            <v-btn
              v-if="false"
              prepend-icon="mdi-rotate-3d-variant"
              color="yellow"
              class="mr-2 mb-2"
            >
              モードチェンジ
              <v-menu activator="parent" transition="slide-y-transition">
                <v-list>
                  <v-list-item title="Live GP" />
                  <v-list-group value="grade">
                    <template #activator="{ props }">
                      <v-list-item v-bind="props" title="Grade Quest" />
                    </template>

                    <v-list-item
                      v-for="season in Object.keys(
                        mode.grade[store.selectDeck.period],
                      )"
                      :key="season"
                      :title="season"
                    />
                  </v-list-group>
                </v-list>
              </v-menu>
            </v-btn>
            <v-btn
              v-if="false"
              prepend-icon="mdi-link"
              color="green-darken-4"
              text="URL発行"
              class="mr-2 mb-2"
              @click="
                urlGenerate = true;
                dialog.urlGenerate = true;
                makeURL();
              "
            />
          </v-col>
          <v-col cols="12" sm="1">
            <v-select
              v-model="store.selectDeck.period"
              label="期"
              :items="Object.keys(FORMATION_MEMBER).reverse()"
              :update:modelValue="store.selectDeck.selectMusic = ''"
            />
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-row no-gutters>
              <v-col cols="12">
                <v-alert
                  v-if="countDefaultCard(store).result > 0"
                  type="warning"
                  variant="outlined"
                  class="mb-2"
                >
                  SIDE STYLEに未設定カードがあるため、AP回復速度が{{
                    countDefaultCard(store).result
                  }}%低下します
                </v-alert>
                <v-alert
                  v-if="
                    countDefaultCard(store).main +
                      countDefaultCard(store).leaves <
                      18 && !isSelectedAceCard
                  "
                  type="warning"
                  variant="outlined"
                  text="エースカードが未設定です"
                  class="mb-2"
                />
                <v-alert
                  v-if="false"
                  type="info"
                  variant="outlined"
                  text="エースカードを設定してください"
                  class="mb-2"
                />
              </v-col>

              <v-col id="deckNameArea" cols="12" class="mt-1 mb-2">
                <span class="deckNameTitle"> デッキ名 </span>
                <span>
                  <!-- <v-text-field
                    v-model="store.selectDeck.name"
                    variant="underlined"
                    density="compact"
                    color="#e5762c"
                    hide-details
                    append-icon="mdi-pencil"
                  /> -->
                  {{ store.selectDeck.name }}
                </span>
                <span>
                  <v-btn
                    icon="mdi-pencil"
                    size="x-small"
                    @click="
                      inputDeckName = store.selectDeck.name;
                      dialog.changeDeckName = true;
                    "
                  />
                </span>
              </v-col>

              <v-col cols="12">
                <v-row no-gutters class="px-1">
                  <v-col v-for="(v, k) in attrName" :key="v" cols="4" sm="2">
                    総{{ v }}：{{ totalParam(store, k) }}
                  </v-col>
                </v-row>
              </v-col>

              <v-col
                v-for="memberName in FORMATION_MEMBER[store.selectDeck.period]"
                :key="memberName"
                cols="12"
                sm="4"
                class="pa-1"
              >
                <v-card elevation="2">
                  <v-row
                    v-if="memberName === 'free'"
                    no-gutters
                    class="memberArea"
                  >
                    <!-- <v-col cols="12" class="characterDetailArea pa-1 cursor-pointer" @click="dialog.characterStatusSetting = true"> -->
                    <v-col
                      cols="12"
                      class="characterDetailArea pb-1"
                      style="padding-top: 2px"
                    >
                      <h2>
                        <span
                          class="d-flex flex-row justify-center align-center"
                        >
                          <span style="margin-top: 2px">free</span>
                        </span>
                      </h2>
                      <v-row v-if="false" no-gutters>
                        <v-col cols="4">
                          <dl>
                            <dt>合計マスタリーLv.</dt>
                            <dd>{{ store.makeTotalMasteryLv(memberName) }}</dd>
                          </dl>
                        </v-col>
                        <v-col cols="5">
                          <h3>ボーナススキル</h3>
                          <span
                            v-for="skillName in bonusSkillList"
                            :key="skillName"
                            class="mr-1"
                          >
                            <img
                              :src="
                                store.getImagePath(
                                  'icons/bonusSkill',
                                  skillName,
                                )
                              "
                              style="width: 25px"
                            />×{{
                              store.memberData.centerList[memberName]
                                .bonusSkill[skillName]
                            }}
                          </span>
                        </v-col>
                        <v-col cols="3">
                          <h3>Season Fan Lv.</h3>
                          <p>7 / 10</p>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col
                      v-for="(ary, styleName, i) in STYLE_HEADLINE[
                        store.selectDeck.period
                      ]"
                      :key="styleName"
                      cols="12"
                      :data-style="styleName"
                      class="pa-1"
                    >
                      <v-row no-gutters class="mb-2">
                        <h3
                          style="
                            writing-mode: vertical-rl; /*text-orientation: upright; */
                            transform: rotate(180deg);
                            display: flex;
                          "
                        >
                          {{ ary.split('STYLE').join('') }}
                          <!--<v-icon
                            v-if="store.selectDeck.cardData[memberName][styleName].id.split('_')[1] !== '000'"
                            :color="`${store.selectDeck.cardData[memberName][styleName].isAce ? 'yellow-accent-4' : 'grey-lighten-2'}`"
                            style="transform: rotate(180deg);"
                            @click="changeAceCard(store, memberName, styleName);"
                          >
                            mdi-crown
                          </v-icon>-->
                        </h3>
                        <v-col cols="4">
                          <v-card
                            @click="
                              store.showModalEvent('selectCard');
                              store.setOpenCard(
                                store.findCardId(
                                  memberName,
                                  store.selectDeck.cardData[memberName][
                                    styleName
                                  ].cardName,
                                ),
                                memberName,
                                styleName,
                              );
                            "
                          >
                            <v-img
                              :src="
                                cardImageUrls[
                                  store.selectDeck.cardData[memberName][
                                    styleName
                                  ].id
                                ]?.after || noImage
                              "
                              :alt="
                                makeIllustCard(
                                  store,
                                  store.selectDeck.cardData[memberName][
                                    styleName
                                  ].id,
                                )
                              "
                            />
                          </v-card>
                        </v-col>
                        <v-col
                          style="font-size: 15px"
                          class="pl-2 position-relative"
                        >
                          <v-row no-gutters>
                            <v-btn
                              density="compact"
                              icon="mdi-close"
                              variant="flat"
                              class="position-absolute right-0"
                              @click="
                                deleteSelectCard(store, memberName, styleName)
                              "
                            />
                          </v-row>
                          <dl class="mb-1">
                            <dt>カード名</dt>
                            <dd style="height: 3em">
                              {{
                                makeCardName(
                                  store,
                                  store.selectDeck.cardData[memberName][
                                    styleName
                                  ].id,
                                )
                              }}
                            </dd>
                          </dl>
                          <v-card
                            variant="flat"
                            :disabled="
                              store.selectDeck.cardData[memberName][
                                styleName
                              ].id.split('_')[1] === '000'
                            "
                            @click="
                              store.setOpenCard(
                                store.selectDeck.cardData[memberName][styleName]
                                  .id,
                                memberName,
                                styleName,
                              );
                              dialog.paramSet = true;
                            "
                          >
                            <v-row no-gutters class="pb-1">
                              <v-col cols="3">
                                <dl>
                                  <dt>レベル</dt>
                                  <dd>
                                    {{
                                      store.selectDeck.cardData[memberName][
                                        styleName
                                      ].param.cardLevel
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>SA</dt>
                                  <dd>
                                    {{
                                      store.selectDeck.cardData[memberName][
                                        styleName
                                      ].param.SALevel
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>スキル</dt>
                                  <dd>
                                    {{
                                      store.selectDeck.cardData[memberName][
                                        styleName
                                      ].param.SLevel
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>解放Lv.</dt>
                                  <dd>
                                    {{
                                      store.selectDeck.cardData[memberName][
                                        styleName
                                      ].param.releaseLevel
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col v-if="false" cols="3">
                                <dl>
                                  <dt>スマイル</dt>
                                  <dd>
                                    {{
                                      formation[selectDeckName][memberName][
                                        styleName
                                      ].smile
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col v-if="false" cols="3">
                                <dl>
                                  <dt>クール</dt>
                                  <dd>
                                    {{
                                      formation[selectDeckName][memberName][
                                        styleName
                                      ].cool
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col v-if="false" cols="3">
                                <dl>
                                  <dt>ピュア</dt>
                                  <dd>
                                    {{
                                      formation[selectDeckName][memberName][
                                        styleName
                                      ].pure
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col v-if="false" cols="3">
                                <dl>
                                  <dt>メンタル</dt>
                                  <dd>
                                    {{
                                      formation[selectDeckName][memberName][
                                        styleName
                                      ].mental
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                            </v-row>
                          </v-card>
                          <v-card
                            v-if="false"
                            variant="flat"
                            :disabled="
                              store.selectDeck.cardData[memberName][styleName]
                                .cardName === 'default'
                            "
                            @click="dialog.paramSet = true"
                          >
                            <v-row no-gutters class="pb-1">
                              <v-col cols="3">
                                <dl>
                                  <dt>レベル</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'cardLevel',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>SA</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'SALevel',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>スキル</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'SLevel',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>解放Lv.</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'releaseLevel',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>スマイル</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'smile',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>クール</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'cool',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>ピュア</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'pure',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>メンタル</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'mental',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>

                      <v-divider
                        v-if="
                          Object.keys(STYLE_HEADLINE[store.selectDeck.period])
                            .length >
                          i + 1
                        "
                        class="mx-1"
                      />
                    </v-col>
                  </v-row>
                  <v-row
                    v-else
                    no-gutters
                    class="memberArea"
                    :data-member_name="memberName"
                  >
                    <!-- <v-col cols="12" class="characterDetailArea pa-1 cursor-pointer" @click="dialog.characterStatusSetting = true"> -->
                    <v-col
                      cols="12"
                      class="characterDetailArea pb-1"
                      style="padding-top: 2px"
                    >
                      <h2>
                        <span
                          class="d-flex flex-row justify-center align-center"
                        >
                          <img
                            :src="
                              store.getImagePath(
                                'icons/member',
                                `icon_illust_${memberName}_${store.selectDeck.period}`,
                              )
                            "
                            class="mr-1"
                            style="width: 35px"
                            :alt="memberName"
                          />
                          <span style="margin-top: 2px">
                            {{ makeMemberFullName(memberName) }}
                          </span>
                          <v-icon
                            v-if="
                              MUSIC_LIST[
                                store.selectDeck.selectMusic
                              ]?.singingMembers.includes(memberName)
                            "
                            icon="mdi-microphone-variant"
                            color="indigo"
                          />
                          <v-icon
                            v-if="
                              MUSIC_LIST[store.selectDeck.selectMusic]
                                ?.center === memberName
                            "
                            icon="mdi-star"
                            color="yellow-accent-1"
                          />
                        </span>
                      </h2>
                      <v-row v-if="false" no-gutters>
                        <v-col cols="4">
                          <dl>
                            <dt>合計マスタリーLv.</dt>
                            <dd>{{ store.makeTotalMasteryLv(memberName) }}</dd>
                          </dl>
                        </v-col>
                        <v-col cols="5">
                          <h3>ボーナススキル</h3>
                          <span
                            v-for="skillName in bonusSkillList"
                            :key="skillName"
                            class="mr-1"
                          >
                            <img
                              :src="
                                store.getImagePath(
                                  'icons/bonusSkill',
                                  skillName,
                                )
                              "
                              style="width: 25px"
                            />×{{
                              store.memberData.centerList[memberName]
                                .bonusSkill[skillName]
                            }}
                          </span>
                        </v-col>
                        <v-col cols="3">
                          <h3>Season Fan Lv.</h3>
                          <p>7 / 10</p>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col
                      v-for="(ary, styleName, i) in STYLE_HEADLINE[
                        store.selectDeck.period
                      ]"
                      :key="styleName"
                      cols="12"
                      :data-style="styleName"
                      class="pa-1"
                    >
                      <v-row no-gutters class="mb-2">
                        <h3
                          style="
                            writing-mode: vertical-rl; /*text-orientation: upright; */
                            transform: rotate(180deg);
                            display: flex;
                          "
                        >
                          {{ ary.split('STYLE').join('') }}
                          <v-icon
                            v-if="
                              store.selectDeck.cardData[memberName][
                                styleName
                              ].id.split('_')[1] !== '000'
                            "
                            :color="`${
                              store.selectDeck.cardData[memberName][styleName]
                                .isAce
                                ? 'yellow-accent-4'
                                : 'grey-lighten-2'
                            }`"
                            icon="mdi-crown"
                            style="transform: rotate(180deg)"
                            @click="changeAceCard(store, memberName, styleName)"
                          />
                        </h3>
                        <v-col cols="4">
                          <v-card
                            @click="
                              store.showModalEvent('selectCard');
                              store.setOpenCard(
                                store.findCardId(
                                  memberName,
                                  store.selectDeck.cardData[memberName][
                                    styleName
                                  ].cardName,
                                ),
                                memberName,
                                styleName,
                              );
                            "
                          >
                            <v-img
                              :src="
                                cardImageUrls[
                                  store.selectDeck.cardData[memberName][
                                    styleName
                                  ].id
                                ]?.after || noImage
                              "
                              :alt="
                                makeIllustCard(
                                  store,
                                  store.selectDeck.cardData[memberName][
                                    styleName
                                  ].id,
                                )
                              "
                            />
                          </v-card>
                        </v-col>
                        <v-col
                          style="font-size: 15px"
                          class="pl-2 position-relative"
                        >
                          <v-row no-gutters>
                            <v-btn
                              density="compact"
                              icon="mdi-close"
                              variant="flat"
                              class="position-absolute right-0"
                              @click="
                                deleteSelectCard(store, memberName, styleName)
                              "
                            />
                          </v-row>
                          <dl class="mb-1">
                            <dt>カード名</dt>
                            <dd style="height: 3em">
                              {{
                                makeCardName(
                                  store,
                                  store.selectDeck.cardData[memberName][
                                    styleName
                                  ].id,
                                )
                              }}
                            </dd>
                          </dl>
                          <v-card
                            variant="flat"
                            :disabled="
                              store.selectDeck.cardData[memberName][
                                styleName
                              ].id.split('_')[1] === '000'
                            "
                            @click="
                              store.setOpenCard(
                                store.selectDeck.cardData[memberName][styleName]
                                  .id,
                                memberName,
                                styleName,
                              );
                              dialog.paramSet = true;
                            "
                          >
                            <v-row no-gutters class="pb-1">
                              <v-col cols="3">
                                <dl>
                                  <dt>レベル</dt>
                                  <dd>
                                    {{
                                      store.selectDeck.cardData[memberName][
                                        styleName
                                      ].param.cardLevel
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>SA</dt>
                                  <dd>
                                    {{
                                      store.selectDeck.cardData[memberName][
                                        styleName
                                      ].param.SALevel
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>スキル</dt>
                                  <dd>
                                    {{
                                      store.selectDeck.cardData[memberName][
                                        styleName
                                      ].param.SLevel
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>解放Lv.</dt>
                                  <dd>
                                    {{
                                      store.selectDeck.cardData[memberName][
                                        styleName
                                      ].param.releaseLevel
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col v-if="false" cols="3">
                                <dl>
                                  <dt>スマイル</dt>
                                  <dd>
                                    {{
                                      formation[selectDeckName][memberName][
                                        styleName
                                      ].smile
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col v-if="false" cols="3">
                                <dl>
                                  <dt>クール</dt>
                                  <dd>
                                    {{
                                      formation[selectDeckName][memberName][
                                        styleName
                                      ].cool
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col v-if="false" cols="3">
                                <dl>
                                  <dt>ピュア</dt>
                                  <dd>
                                    {{
                                      formation[selectDeckName][memberName][
                                        styleName
                                      ].pure
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col v-if="false" cols="3">
                                <dl>
                                  <dt>メンタル</dt>
                                  <dd>
                                    {{
                                      formation[selectDeckName][memberName][
                                        styleName
                                      ].mental
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                            </v-row>
                          </v-card>
                          <v-card
                            v-if="false"
                            variant="flat"
                            :disabled="
                              store.selectDeck.cardData[memberName][styleName]
                                .cardName === 'default'
                            "
                            @click="dialog.paramSet = true"
                          >
                            <v-row no-gutters class="pb-1">
                              <v-col cols="3">
                                <dl>
                                  <dt>レベル</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'cardLevel',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>SA</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'SALevel',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>スキル</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'SLevel',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>解放Lv.</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'releaseLevel',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>スマイル</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'smile',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>クール</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'cool',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>ピュア</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'pure',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                              <v-col cols="3">
                                <dl>
                                  <dt>メンタル</dt>
                                  <dd>
                                    {{
                                      makeParam(
                                        store,
                                        memberName,
                                        styleName,
                                        'mental',
                                      )
                                    }}
                                  </dd>
                                </dl>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>

                      <v-divider
                        v-if="
                          Object.keys(STYLE_HEADLINE[store.selectDeck.period])
                            .length >
                          i + 1
                        "
                        class="mx-1"
                      />
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12">
            <h1>想定楽曲</h1>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2">
              <h3>センターカード</h3>

              <v-row>
                <v-col cols="6">
                  <v-card>
                    <v-img
                      :src="
                        cardImageUrls[showCenterCard(store).id]?.after ||
                        noImage
                      "
                    />
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <div>
                    カード名：{{
                      store.findCardData(showCenterCard(store).id).cardName ===
                      'default'
                        ? ''
                        : store.findCardData(showCenterCard(store).id).cardName
                    }}
                  </div>
                  <div>
                    タイプ：{{
                      showCenterCard(store).id.split('_')[1] === '000'
                        ? ''
                        : convertStyleEnToJp(
                            store.findCardData(showCenterCard(store).id)
                              .styleType,
                          )
                    }}
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card class="pa-2">
              <v-btn
                v-if="store.selectDeck.selectMusic !== ''"
                density="compact"
                icon="mdi-close"
                variant="flat"
                class="position-absolute right-0"
                @click="store.selectDeck.selectMusic = ''"
              />
              <v-row no-gutters>
                <v-col cols="12" class="mb-2">
                  <span class="mr-2">曲名</span>
                  {{ store.selectDeck.selectMusic }}
                </v-col>
                <v-col cols="6">
                  <v-card @click="dialog.selectMusic = true">
                    <v-img
                      :src="
                        (currentMusicId && musicImageUrls[currentMusicId]) ||
                        noImage
                      "
                      :alt="
                        store.selectDeck.selectMusic === ''
                          ? 'NO IMAGE'
                          : store.selectDeck.selectMusic
                      "
                    />
                  </v-card>
                </v-col>
                <v-col cols="6" class="pl-4">
                  <div class="mb-2">
                    <span class="mr-2">属性</span>
                    {{
                      convertAttributeEnToJa(
                        MUSIC_LIST[store.selectDeck.selectMusic]?.attribute,
                      ) ?? ''
                    }}
                  </div>
                  <div class="d-flex flex-row align-center mb-2">
                    <span class="mr-2">センター</span>
                    <img
                      v-if="store.selectDeck.selectMusic !== ''"
                      :src="
                        store.getImagePath(
                          'icons/member',
                          `icon_illust_${
                            MUSIC_LIST[store.selectDeck.selectMusic]?.center
                          }_${store.selectDeck.period}`,
                        )
                      "
                      class="mr-1"
                      style="width: 35px; height: 35px"
                      :alt="MUSIC_LIST[store.selectDeck.selectMusic]?.center"
                    />
                  </div>
                  <div style="min-height: 35px">
                    <p class="mb-1">歌唱メンバー</p>
                    <img
                      v-for="memberName in MUSIC_LIST[
                        store.selectDeck.selectMusic
                      ]?.singingMembers"
                      :key="memberName"
                      :src="
                        store.getImagePath(
                          'icons/member',
                          `icon_illust_${memberName}_${store.selectDeck.period}`,
                        )
                      "
                      class="mr-1"
                      style="width: 35px"
                      :alt="memberName"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col v-if="false" cols="6">
            <v-card class="pa-2">
              <h3>シミュレーション結果</h3>
              <p>
                ハート1個あたりのLOVE値：{{
                  Math.ceil((120 * totalParam(store, 'smile') * 1.5) / 6 / 90)
                }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-alert type="warning" variant="outlined" class="mt-7">
      このページは現在、おためし版となっております。<br />
      おためし版は、以下のような仕様となっております。<br />
      <br />

      <b>できること</b>
      <ul class="ml-4">
        <li>・デッキの作成</li>
      </ul>
      <br />

      <b>できないこと（今後できるようになること）</b>
      <ul class="ml-4">
        <li>・デッキの保存（バックアップ）</li>
      </ul>
      <br />

      また、操作中にエラーが発生する可能性があります。<br />
      その際は、お手数ですがお題箱よりお知らせください。<br />
      （「この操作を行ったらこうなるはずがこうなった」というような、その時の操作や状況などをできるだけ詳しく教えてもらえるとありがたいです）<br />
      <br />
      もちろん、「こんな機能がほしい！」「ここがこうなったらもっと良いのに…」などの要望もお待ちしております。<br />
      そちらもお題箱よりお知らせください。
    </v-alert>
  </v-container>

  <v-container v-if="false" fluid class="pa-2">
    <v-row>
      <v-col cols="12" class="pb-3">
        <h1>SIMULATION ～ 獲得グランプリPt.計算ツール ～</h1>
      </v-col>
      <v-col cols="12" class="pt-0 pb-3">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
            <v-expansion-panel-text>
              ライブグランプリの獲得グランプリPt.の計算ツールです。<br />
              <br />
              <b>使い方</b><br />
              Season Fan Lv.は全員分入力してください。<br />
              (アプリ内上部のユーザーネームをタップして、Fan
              Lv.の右にあるアイコンをタップすると確認できます)<br />
              解放Lv.は、その楽曲の歌唱メンバー(リーダーを含む)のみ入力してください。<br />
              解放Lv.の変更方法は、<br />
              ・名前の横にあるチェックマークにチェックを入れる<br />
              ・歌唱メンバーのメインスタイルに設定しているカードのレア度を設定<br />
              で該当メンバーの解放Lv.を変更できるようになります。<br />
              <br />
              <b>注意事項</b><br />
              ※突貫で作ったため、スマホでの表示を考慮していません。横画面にするか、PCからアクセスしてください。<br />
              ※この機能は暫定機能です。今後のアップデートでリニューアルします。
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        v-for="i in 2"
        :key="i"
        cols="12"
        sm="6"
        :class="
          [
            'py-2 prr-sm-2 pr-md-2 pr-lg-2 pr-xl-2',
            'py-2 prl-sm-2 pl-md-2 pl-lg-2 pl-xl-2',
          ][i - 1]
        "
      >
        <v-card elevation="2">
          <v-card-title>楽曲{{ i }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <h2>予想獲得グランプリPt. {{ GPpt(i - 1) }}</h2>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="score[i - 1]"
                  label="スコア"
                  hint="スコアを入力してください"
                  :rules="rules.hankaku"
                  persistent-hint
                  color="pink"
                  base-color="pink"
                />
              </v-col>

              <v-col cols="12" sm="6" class="mb-5">
                <v-select
                  v-model="clearStage[i - 1]"
                  :items="[1, 2, 3, 4]"
                  label="ステージ"
                  hint="ステージを選択してください"
                  persistent-hint
                  color="pink"
                  base-color="pink"
                />
              </v-col>
            </v-row>

            <div v-for="memberName in store.memberNameList" :key="memberName">
              <v-checkbox
                v-model="performance[i - 1]"
                :label="arr.last"
                :value="memberName"
                hide-details
                color="pink"
              />

              <v-row no-gutters>
                <v-col cols="2">レア度</v-col>
                <v-col cols="5" class="text-center">Season Fan Lv.</v-col>
                <v-col cols="5" class="text-center">解放Lv.</v-col>
                <v-col cols="2">
                  <v-select
                    v-model="bonus.rare[i - 1][memberName]"
                    :items="['UR', 'SR', 'R']"
                    :hint="`メインスタイルに設定している${arr.last}のカードのレア度を選択してください`"
                    color="pink"
                    base-color="pink"
                  />
                </v-col>
                <v-col cols="5">
                  <v-row no-gutters>
                    <v-spacer />
                    <v-col align-self="center" justify="center" class="pa-0">
                      <v-btn
                        text="-1"
                        x-small
                        :disabled="bonus.seasonFan[i - 1][memberName] === 1"
                        @click="
                          setValue(
                            ['seasonFan', i - 1, memberName],
                            bonus.seasonFan[i - 1][memberName] - 1,
                          )
                        "
                      />
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      class="px-0 pt-1 pb-0"
                    >
                      {{ bonus.seasonFan[i - 1][memberName] }}
                    </v-col>
                    <v-col align="center" justify="center" class="pa-0">
                      <v-btn
                        text="+1"
                        x-small
                        :disabled="bonus.seasonFan[i - 1][memberName] === 10"
                        @click="
                          setValue(
                            ['seasonFan', i - 1, memberName],
                            bonus.seasonFan[i - 1][memberName] + 1,
                          )
                        "
                      />
                    </v-col>
                  </v-row>

                  <v-spacer />
                </v-col>
                <v-col cols="5">
                  <v-row no-gutters>
                    <v-spacer />
                    <v-col align="center" justify="center" class="pa-0">
                      <v-btn
                        text="-1"
                        x-small
                        :disabled="
                          bonus.rare[i - 1][memberName] === undefined ||
                          bonus.release[i - 1][memberName] === 1
                        "
                        @click="
                          setValue(
                            ['release', i - 1, memberName],
                            bonus.release[i - 1][memberName] - 1,
                          )
                        "
                      />
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      class="px-0 pt-1 pb-0"
                    >
                      {{ bonus.release[i - 1][memberName] }}
                    </v-col>
                    <v-col align="center" justify="center" class="pa-0">
                      <v-btn
                        text="+1"
                        x-small
                        :disabled="
                          bonus.rare[i - 1][memberName] === undefined ||
                          bonus.release[i - 1][memberName] === 5
                        "
                        @click="
                          setValue(
                            ['release', i - 1, memberName],
                            bonus.release[i - 1][memberName] + 1,
                          )
                        "
                      />
                    </v-col>
                    <v-spacer />
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="dialog.paramSet" max-width="600">
    <v-sheet class="pa-2">
      <v-row no-gutters>
        <v-col cols="12">
          <p class="text-h6 mb-8">レベル</p>
          <v-slider
            v-model="
              store.selectDeck.cardData[store.openCard.name][
                store.openCard.style
              ].param.cardLevel
            "
            hide-details
            :max="
              MAX_CARD_LEVEL[store.searchRarity(store.openCard.ID)][
                MAX_CARD_LEVEL[store.searchRarity(store.openCard.ID)].length - 1
              ]
            "
            min="1"
            thumb-label="always"
            step="1"
            color="pink"
            thumb-color="pink"
            class="px-3"
          />
        </v-col>
        <v-col cols="12" class="mt-2">
          <p class="text-h6 mb-8">SA</p>
          <v-slider
            v-model="
              store.selectDeck.cardData[store.openCard.name][
                store.openCard.style
              ].param.SALevel
            "
            hide-details
            min="1"
            :max="`${
              9 +
              store.selectDeck.cardData[store.openCard.name][
                store.openCard.style
              ].param.releaseLevel
            }`"
            thumb-label="always"
            step="1"
            color="pink"
            thumb-color="pink"
            class="px-3"
          />
        </v-col>
        <v-col cols="12" class="mt-2">
          <p class="text-h6 mb-8">スキル</p>
          <v-slider
            v-model="
              store.selectDeck.cardData[store.openCard.name][
                store.openCard.style
              ].param.SLevel
            "
            hide-details
            min="1"
            :max="`${
              9 +
              store.selectDeck.cardData[store.openCard.name][
                store.openCard.style
              ].param.releaseLevel
            }`"
            thumb-label="always"
            step="1"
            color="pink"
            thumb-color="pink"
            class="px-3"
          />
        </v-col>
        <v-col cols="12" class="mt-2">
          <p class="text-h6 mb-8">解放Lv.</p>
          <v-slider
            v-model="
              store.selectDeck.cardData[store.openCard.name][
                store.openCard.style
              ].param.releaseLevel
            "
            hide-details
            max="5"
            min="1"
            thumb-label="always"
            step="1"
            color="pink"
            thumb-color="pink"
            class="px-3"
          />
        </v-col>
      </v-row>

      <div class="mt-3 text-center">
        <v-btn
          prepend-icon="mdi-close"
          text="CLOSE"
          class="mr-4"
          @click="dialog.paramSet = false"
        />
      </div>
    </v-sheet>
  </v-dialog>

  <v-dialog v-model="dialog.changeDeckName" max-width="600">
    <v-sheet class="pa-2">
      <v-row no-gutters>
        <v-col cols="12" class="mb-2">
          <h3>デッキ名を変更</h3>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="inputDeckName"
            counter
            color="pink"
            hint="デッキ名を入力してください"
            maxlength="50"
            persistent-counter
            persistent-hint
            :rules="[checkDeckName(store)]"
          />
        </v-col>
      </v-row>
      <div class="mt-3 text-center">
        <v-btn
          prepend-icon="mdi-close"
          text="CLOSE"
          class="mr-4"
          @click="dialog.changeDeckName = false"
        />
        <v-btn
          color="light-blue"
          prepend-icon="mdi-content-save"
          text="SAVE"
          :disabled="checkDeckName(store) !== false"
          @click="changeSelectDeckName(store)"
        />
      </div>
    </v-sheet>
  </v-dialog>

  <v-dialog v-model="dialog.deckList" max-width="600">
    <v-sheet class="pa-2">
      <h2>デッキリスト</h2>

      <draggable
        v-if="false"
        v-model="store.deck"
        item-key="cardName"
        class="d-none d-sm-flex flex-column"
        style="gap: 12px"
      >
        <template #item="{ element }">
          <v-card class="pa-2 handle cursor-pointer" color="yellow">
            <p class="text-h6 py-1 px-2">
              {{ element.name }}
            </p>

            <v-divider class="mb-2" />

            <v-row no-gutters class="text-center">
              <v-col cols="4">
                <v-btn
                  color="success"
                  :disabled="
                    element.name === store.selectDeck.name ||
                    beforeDeckName !== ''
                  "
                  @click="
                    snackbar.openDeck = false;
                    inputDeckName = element.name;
                    store.selectDeckName = element.name;
                    snackbar.openDeck = true;
                  "
                >
                  <v-icon icon="mdi-folder-open" />
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  color="light-blue"
                  :disabled="
                    store.deck.length <= 1 ||
                    !/デッキを入れ替えました|入れ替えをキャンセルしました/.test(
                      shiftDeckMessage.text,
                    )
                  "
                  @click="copyDeck(store, element.name)"
                >
                  <v-icon icon="mdi-content-copy" />
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  color="error"
                  :disabled="
                    element.name === store.selectDeck.name ||
                    beforeDeckName !== ''
                  "
                  @click="deleteDeck(store, element.name)"
                >
                  <v-icon icon="mdi-trash-can" />
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </template>
      </draggable>

      <v-card
        v-for="(deck, index) in store.deck"
        :key="index"
        :class="`${
          store.deck.length - 1 === index ? '' : 'mb-3 '
        }pa-2 handle cursor-pointer`"
        color="yellow"
      >
        <p class="text-h6 py-1 px-2">
          {{ deck.name }}
        </p>

        <v-divider class="mb-2" />

        <v-row no-gutters class="text-center">
          <v-col cols="3">
            <v-btn
              color="success"
              :disabled="
                deck.name === store.selectDeck.name || beforeDeckName !== ''
              "
              @click="
                snackbar.openDeck = false;
                inputDeckName = deck.name;
                store.selectDeckName = deck.name;
                snackbar.openDeck = true;
              "
            >
              <v-icon icon="mdi-folder-open" />
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
              color="purple"
              :disabled="
                store.deck.length <= 1 ||
                !/デッキをコピーしました|コピーをキャンセルしました/.test(
                  copyDeckMessage.text,
                )
              "
              @click="shiftDeck(store, deck.name)"
            >
              <v-icon icon="mdi-swap-vertical" />
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
              color="light-blue"
              :disabled="
                store.deck.length <= 1 ||
                !/デッキを入れ替えました|入れ替えをキャンセルしました/.test(
                  shiftDeckMessage.text,
                )
              "
              @click="copyDeck(store, deck.name)"
            >
              <v-icon icon="mdi-content-copy" />
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
              color="error"
              :disabled="
                deck.name === store.selectDeck.name || beforeDeckName !== ''
              "
              @click="deleteDeck(store, deck.name)"
            >
              <v-icon icon="mdi-trash-can" />
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <div class="text-center mt-2">
        <v-btn
          prepend-icon="mdi-close"
          text="CLOSE"
          @click="dialog.deckList = false"
        />
      </div>
    </v-sheet>
  </v-dialog>

  <v-dialog v-model="dialog.characterStatusSetting" max-width="700">
    <v-sheet class="pa-2">
      <v-row no-gutters>
        <v-col cols="12" sm="4" class="pr-sm-2">
          <h3>合計マスタリーLv.</h3>
          <v-text-field
            :rules="rules.hankaku"
            maxlength="3"
            density="compact"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <h3>獲得済みボーナススキル</h3>
          <span
            v-for="skillName in bonusSkillList"
            :key="skillName"
            class="mr-1"
          >
            <img
              :src="store.getImagePath('icons/bonusSkill', skillName)"
              style="width: 25px"
            />×{{ 0 }}
          </span>
        </v-col>
        <v-col cols="12" sm="4" class="pl-sm-2">
          <h3>Season Fan Lv.</h3>
          <v-text-field
            :rules="rules.hankaku"
            maxlength="2"
            density="compact"
          />
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn
          prepend-icon="mdi-close"
          text="CLOSE"
          @click="dialog.characterStatusSetting = false"
        />
      </div>
    </v-sheet>
  </v-dialog>

  <v-dialog v-model="dialog.selectMusic" max-width="1600">
    <v-sheet class="pa-2">
      <ul id="musicList">
        <li v-for="(data, title) in musicList(store)" :key="title">
          <v-card
            @click="
              store.selectDeck.selectMusic = title;
              dialog.selectMusic = false;
            "
          >
            <v-img
              :src="
                (getMusicId(title) && musicImageUrls[getMusicId(title)]) ||
                noImage
              "
              :alt="title"
            />
            <v-card-title class="text-subtitle-2 text-center px-2 pt-1 pb-0">
              {{ title }}
            </v-card-title>
          </v-card>
        </li>
      </ul>

      <div class="mt-3 text-center">
        <v-btn
          prepend-icon="mdi-close"
          text="CLOSE"
          @click="dialog.selectMusic = false"
        />
      </div>
    </v-sheet>
  </v-dialog>

  <v-dialog v-model="dialog.urlGenerate" max-width="600">
    <v-sheet class="pa-2">
      <div v-if="isUrlGenerate" class="text-center">
        <v-progress-circular color="pink" indeterminate />
        <p class="mt-2">URL生成中</p>
      </div>
      <div v-else>
        <p class="text-center mb-2">URLを発行しました！</p>
        <v-text-field
          variant="underlined"
          append-inner-icon="mdi-content-copy"
          color="pink"
          readonly
          @click:append-inner="snackbar.urlCopy = true"
        />
        <div class="text-center mt-2">
          <v-btn
            prepend-icon="mdi-close"
            text="CLOSE"
            @click="dialog.urlGenerate = false"
          />
        </div>
      </div>
    </v-sheet>
  </v-dialog>

  <v-snackbar v-model="snackbar.makeDeck" color="success" :timeout="2000">
    デッキを新規作成しました
  </v-snackbar>

  <v-snackbar v-model="snackbar.nameSave" color="success" :timeout="2000">
    デッキ名を変更しました
  </v-snackbar>

  <v-snackbar v-model="snackbar.openDeck" color="success" :timeout="2000">
    {{ store.selectDeck.name }}を開きました
  </v-snackbar>

  <v-snackbar
    v-model="snackbar.copyDeck"
    :color="copyDeckMessage.color"
    :timeout="copyDeckMessage.time"
  >
    {{ copyDeckMessage.text }}
  </v-snackbar>

  <v-snackbar
    v-model="snackbar.shiftDeck"
    :color="shiftDeckMessage.color"
    :timeout="shiftDeckMessage.time"
  >
    {{ shiftDeckMessage.text }}
  </v-snackbar>

  <v-snackbar v-model="snackbar.deleteDeck" color="success" :timeout="2000">
    {{ deleteDeckName }}を削除しました
  </v-snackbar>

  <v-snackbar v-model="snackbar.resetDeck" color="success" :timeout="2000">
    デッキをリセットしました
  </v-snackbar>

  <v-snackbar v-model="snackbar.urlCopy" color="success" :timeout="2000">
    URLをコピーしました。
  </v-snackbar>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import draggable from 'vuedraggable';
import { convertStyleEnToJp } from '@/constants/cards';
import {
  MEMBER_IDS,
  MEMBER_NAMES,
  FORMATION_MEMBER,
  makeMemberFullName,
} from '@/constants/memberNames';
import { MUSIC_LIST } from '@/constants/musicList';
import { convertAttributeEnToJa } from '@/constants/music';
import { MAX_CARD_LEVEL } from '@/constants/cards';
import { STYLE_HEADLINE } from '@/constants/styleHeadline';
import noImage from '@/assets/images/NO IMAGE_card.webp';
// import axios from 'axios';
const store = useStateStore();

const cardImageUrls = computed(
  () => store.imageCache['llllMgr_cardImageUrls_v2'] || {},
);

const musicImageUrls = computed(
  () => store.imageCache['llllMgr_musicImageUrls'] || {},
);

const currentMusicId = computed(() => {
  const title = store.selectDeck.selectMusic;
  if (!title) return null;
  const entry = Object.entries(store.musicList).find(
    ([_, v]) => v.title === title,
  );
  return entry ? entry[0] : null;
});

const getMusicId = (title) => {
  const entry = Object.entries(store.musicList).find(
    ([_, v]) => v.title === title,
  );
  return entry ? entry[0] : null;
};

watch(
  () => store.selectDeck,
  (newDeck) => {
    if (!newDeck || !newDeck.cardData) return;

    const cards = [];
    for (const member in newDeck.cardData) {
      for (const style in newDeck.cardData[member]) {
        const cardInfo = newDeck.cardData[member][style];
        if (cardInfo && cardInfo.id && cardInfo.id.split('_')[1] !== '000') {
          cards.push({ ID: cardInfo.id });
        }
      }
    }

    if (cards.length > 0) {
      store.fetchImages(
        'llllMgr_cardImageUrls_v2',
        cards,
        (c) => c.ID,
        (c) => ({
          before: `cardIllust/${store.makeCardIllustName(c.ID, false)}.webp`,
          after: `cardIllust/${store.makeCardIllustName(c.ID, true)}.webp`,
        }),
      );
    }
  },
  { deep: true, immediate: true },
);

watch(
  () => store.selectDeck.selectMusic,
  (newTitle) => {
    if (!newTitle) return;
    const id = currentMusicId.value;
    if (id) {
      store.fetchImages(
        'llllMgr_musicImageUrls',
        [{ ID: id, title: newTitle }],
        (item) => item.ID,
        (item) => `cdJacket/${store.conversion(item.title)}.webp`,
      );
    }
  },
  { immediate: true },
);

watch(
  [() => store.selectDeck.period, () => store.musicList],
  ([newPeriod, musicList]) => {
    if (!newPeriod || !musicList) return;

    const targetMusic = Object.entries(musicList)
      .filter(([_, val]) => val.term === Number(newPeriod))
      .map(([key, val]) => ({ ID: key, ...val }));

    if (targetMusic.length > 0) {
      store.fetchImages(
        'llllMgr_musicImageUrls',
        targetMusic,
        (item) => item.ID,
        (item) => `cdJacket/${store.conversion(item.title)}.webp`,
      );
    }
  },
  { immediate: true },
);

const showCenterCard = (store) => {
  if (store.selectDeck.selectMusic === '') {
    return {
      id: 'df_000',
      isAce: false,
      param: {
        cardLevel: 1,
        SALevel: 1,
        SLevel: 1,
        releaseLevel: 1,
      },
    };
  } else if (
    store.selectDeck.cardData[
      MUSIC_LIST[store.selectDeck.selectMusic]?.center
    ].main.id.split('_')[1] === '000'
  ) {
    return {
      id: 'df_000',
      isAce: false,
      param: {
        cardLevel: 1,
        SALevel: 1,
        SLevel: 1,
        releaseLevel: 1,
      },
    };
  } else {
    return store.selectDeck.cardData[
      MUSIC_LIST[store.selectDeck.selectMusic]?.center
    ].main;
  }
};
</script>

<script>
export default {
  name: 'FormationArea',
  components: {
    draggable,
  },
  data() {
    return {
      windowSize: {
        width: 0,
        height: 0,
      },
      attrName: {
        smile: 'スマイル',
        cool: 'クール',
        pure: 'ピュア',
        mental: 'メンタル',
        releaseLevel: '解放Lv.',
      },
      bonusSkillList: [
        'ビートハートアップ',
        'ボルテージアップ',
        'メンタルリカバー',
        'LOVEボーナス',
      ],
      inputDeckName: '',
      selectDeckName: '',
      deleteDeckName: '',
      beforeDeckName: '',
      shiftDeckMessage: {
        text: 'デッキを入れ替えました',
        time: 0,
        color: '',
      },
      copyDeckMessage: {
        text: 'デッキをコピーしました',
        time: 0,
        color: '',
      },
      isSelectedAceCard: false,
      score: [0, 0],
      clearStage: [1, 1],
      performance: [[], []],
      bonus: {
        rare: [
          {
            ginko: null,
            kosuzu: null,
            hime: null,
            kaho: null,
            sayaka: null,
            rurino: null,
            kozue: null,
            tsuzuri: null,
            megumi: null,
          },
          {
            ginko: null,
            kosuzu: null,
            hime: null,
            kaho: null,
            sayaka: null,
            rurino: null,
            kozue: null,
            tsuzuri: null,
            megumi: null,
          },
        ],
        seasonFan: [
          {
            ginko: 1,
            kosuzu: 1,
            hime: 1,
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1,
          },
          {
            ginko: 1,
            kosuzu: 1,
            hime: 1,
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1,
          },
        ],
        release: [
          {
            ginko: 1,
            kosuzu: 1,
            hime: 1,
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1,
          },
          {
            ginko: 1,
            kosuzu: 1,
            hime: 1,
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1,
          },
        ],
      },
      clearRank: [1, 1.1, 1.2, 1.3],
      seasonFanLv: [0, 0.2, 0.275, 0.35, 0.425, 0.5, 0.55, 0.6, 0.65, 0.7],
      releaseLv: {
        UR: [0, 0.2, 0.3, 0.35, 0.4],
        BR: [0, 0.2, 0.3, 0.35, 0.4],
        SR: [0, 0.15, 0.25, 0.3, 0.35],
        R: [0, 0.1, 0.15, 0.2, 0.25],
      },
      rules: {
        inputCheck: (value) => !!value || '入力してください',
        hankaku: (value) => !isNaN(value) || '半角数字で入力してください',
      },
      selectTab: 'kaho',
      dialog: {
        deckList: false,
        changeDeckName: false,
        characterStatusSetting: false,
        paramSet: false,
        selectMusic: false,
        urlGenerate: false,
      },
      snackbar: {
        makeDeck: false,
        nameSave: false,
        openDeck: false,
        shiftDeck: false,
        copyDeck: false,
        deleteDeck: false,
        resetDeck: false,
        urlCopy: false,
      },
      attr: [
        'cardLevel',
        'SALevel',
        'SLevel',
        'releaseLevel',
        'smile',
        'cool',
        'pure',
        'mental',
      ],
      formation: {},
      formation_default: {
        ginko: {
          main: 'default',
          side1: 'default',
          side2: 'default',
        },
        kosuzu: {
          main: 'default',
          side1: 'default',
          side2: 'default',
        },
        hime: {
          main: 'default',
          side1: 'default',
          side2: 'default',
        },
        kaho: {
          main: 'default',
          side1: 'default',
          side2: 'default',
        },
        sayaka: {
          main: 'default',
          side1: 'default',
          side2: 'default',
        },
        rurino: {
          main: 'default',
          side1: 'default',
          side2: 'default',
        },
        kozue: {
          main: 'default',
          side1: 'default',
          side2: 'default',
        },
        tsuzuri: {
          main: 'default',
          side1: 'default',
          side2: 'default',
        },
        megumi: {
          main: 'default',
          side1: 'default',
          side2: 'default',
        },
      },
      mode: {
        liveGP: 'ライブGP',
        grade: {
          103: {
            SPRING: {
              spring: 30,
              party: 20,
              prize: 10,
            },
            SUMMER: {
              summer: 30,
              party: 20,
              prize: 10,
            },
            AUTUMN: {
              autumn: 30,
              party: 20,
              prize: 10,
            },
            WINTER: {
              winter: 30,
              party: 20,
              prize: 10,
            },
            GRADUATION: {
              graduation: 30,
              normal: 30,
              prize: 10,
              BR: 20,
            },
          },
          104: {
            SPRING: {
              spring: 30,
              party: 20,
              prize: 10,
            },
            SUMMER: {
              summer: 30,
              party: 20,
              prize: 10,
            },
            AUTUMN: {
              autumn: 30,
              party: 20,
              prize: 10,
            },
            WINTER: {
              winter: 30,
              party: 20,
              prize: 10,
            },
            // 'GRADUATION': {
            //   graduation: 30,
            //   normal: 30,
            //   prize: 10,
            //   BR: 20,
            // }
          },
        },
      },
      isUrlGenerate: false,
      apiStatusCode: {
        200: 'URL生成に成功しました。',
        400: 'リクエストにエラーが発生しました。\nお手数ですが、表示されているエラーコードとエラーメッセージをお題箱よりお送りください。',
        401: 'トークンが無効です。\nお手数ですが、表示されているエラーコードをお題箱よりお送りください。',
        403: '一時的または恒久的に利用ができません。\nお手数ですが、表示されているエラーコードをお題箱よりお送りください。',
        409: 'リクエストされた条件で短縮URLの発行ができません。\nお手数ですが、表示されているエラーコードとエラーメッセージをお題箱よりお送りください。',
        429: 'APIの使用制限に達しました。一定時間経過後に再度試みてください。',
        500: '一時的にシステムエラーが発生しています。一定時間経過後に再度試みてください。',
        503: '一時的にサービスが利用できません。一定時間経過後に再度試みてください。',
      },
    };
  },
  computed: {
    setCard() {
      return this.updateData.selectCard;
    },
    GPpt() {
      return (target) => {
        let releaseLv = 0;
        let seasonFanLv = 0;

        for (const memberName in this.bonus.seasonFan[target]) {
          if (this.performance[target].indexOf(memberName) >= 0) {
            seasonFanLv +=
              this.seasonFanLv[this.bonus.seasonFan[target][memberName] - 1];

            if (this.bonus.rare[target][memberName] !== undefined) {
              releaseLv +=
                this.releaseLv[this.bonus.rare[target][memberName]][
                  this.bonus.release[target][memberName] - 1
                ];
            }
          }
        }

        return Math.ceil(
          this.score[target] *
            this.clearRank[this.clearStage[target] - 1] *
            (1 + releaseLv) *
            (1 + seasonFanLv),
        ).toLocaleString();
      };
    },
    totalParam() {
      return (store, attr) => {
        let result = 0;
        let releasePoint = 0;

        if (store.selectDeck.selectMusic === '') {
          return result;
        }

        for (const memberName in store.selectDeck.cardData) {
          for (const style in STYLE_HEADLINE[store.selectDeck.period]) {
            if (
              store.selectDeck.cardData[memberName][style].id.split('_')[1] ===
              '000'
            ) {
              continue;
            } else if (attr === 'releaseLevel') {
              if (
                MUSIC_LIST[
                  store.selectDeck.selectMusic
                ]?.singingMembers.includes(memberName)
              ) {
                if (style === 'main') {
                  result +=
                    store.selectDeck.cardData[memberName][style].param
                      .releaseLevel;
                  releasePoint +=
                    this.releaseLv[
                      store.searchRarity(
                        store.selectDeck.cardData[memberName][style].id,
                      )
                    ][
                      store.selectDeck.cardData[memberName][style].param
                        .releaseLevel - 1
                    ] * 100;
                }
              }

              continue;
            } else if (
              !MUSIC_LIST[
                store.selectDeck.selectMusic
              ]?.singingMembers.includes(memberName)
            ) {
              continue;
            }

            let param = store.cardParam(
              attr,
              store.selectDeck.cardData[memberName][style].id,
            );

            if (MUSIC_LIST[store.selectDeck.selectMusic].attribute === attr) {
              param *= 1.5;
            }

            if (style !== 'main') {
              param *= 0.1;
            }

            result += Math.round(param);
          }
        }

        return attr === 'releaseLevel'
          ? `${result} (×${1 + releasePoint / 100})`
          : result;
      };
    },
    countDefaultCard() {
      return (store) => {
        const sum = {
          main: 0,
          side: 0,
        };

        for (const memberName in store.selectDeck.cardData) {
          if (memberName === 'free') {
            sum.side++;
          } else {
            for (const style in store.selectDeck.cardData[memberName]) {
              if (
                store.selectDeck.cardData[memberName][style].id.split(
                  '_',
                )[1] === '000' &&
                Object.keys(STYLE_HEADLINE[store.selectDeck.period]).find(
                  (v) => v === style,
                ) !== undefined
              ) {
                sum[style === 'main' ? 'main' : 'side']++;
              }
            }
          }
        }

        return {
          main: sum.main,
          leaves: sum.side,
          result: sum.side > 9 ? 95 : sum.side * 10,
        };
      };
    },
  },
  created() {
    // console.log(decodeURIComponent(window.location.search.replace('?', '')));

    if (Object.keys(this.formation).length === 0) {
      this.formation['新規デッキ1'] = this.makeDefaultFormation();
    }
  },
  mounted() {},
  methods: {
    makeNewDeck(store, resetFlg) {
      const a = {
        name: '',
        period: resetFlg ? Number(store.selectDeck.period) : store.thisPeriod,
        cardData: {},
        selectMusic: '',
        comment: '',
      };

      if (resetFlg) {
        a.name = store.selectDeck.name;
      } else {
        for (let index = 1; index < 9999; index++) {
          if (this.checkDeckName(store, `新規デッキ${index}`) === false) {
            a.name = `新規デッキ${index}`;
            break;
          }
        }
      }

      for (const name of FORMATION_MEMBER[a.period]) {
        a.cardData[name] = {};
        const cardId = `${Object.values(MEMBER_IDS).find((key) => {
          return key === name;
        })}_000`;

        for (const style of ['main', 'side1', 'side2']) {
          a.cardData[name][style] = {
            id: cardId,
            isAce: false,
            param: {
              cardLevel: 1,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
            },
          };
        }
      }

      this.selectDeckName = a.name;
      this.inputDeckName = a.name;
      this.isSelectedAceCard = false;
      store.selectDeckName = a.name;

      if (resetFlg) {
        for (const num in store.deck) {
          if (store.deck[num].name === store.selectDeck.name) {
            store.deck[num] = a;
          }
        }

        this.snackbar.resetDeck = true;
      } else {
        store.deck.push(a);
      }
    },
    changeSelectDeckName(store) {
      this.dialog.changeDeckName = false;
      this.snackbar.nameSave = true;
      store.selectDeck.name = this.inputDeckName;
      store.selectDeckName = this.inputDeckName;
    },
    deleteDeck(store, deleteDeckName) {
      this.snackbar.deleteDeck = false;
      let num = 0;

      store.deck = store.deck.filter((v, i) => {
        if (v.name !== deleteDeckName) {
          return true;
        } else {
          num = i - 1 < 0 ? 0 : i - 1;
          return false;
        }
      });

      store.selectDeckName = store.deck[num].name;
      this.selectDeckName = store.deck[num].name;
      this.inputDeckName = store.deck[num].name;
      this.deleteDeckName = deleteDeckName;
      this.snackbar.deleteDeck = true;
    },
    checkDeckName(store, checkDeckName) {
      const name = checkDeckName || this.inputDeckName;

      if (name === '') {
        return 'デッキ名を入力してください';
      } else if (store.deck.find((v) => v.name === name)) {
        return '既に存在するデッキ名です';
      } else {
        return false;
      }
    },
    shiftDeck(store, targetDeckName) {
      this.snackbar.shiftDeck = false;
      this.copyDeckMessage.text = 'デッキをコピーしました';

      if (this.beforeDeckName === '') {
        this.beforeDeckName = targetDeckName;
        this.shiftDeckMessage.text = '入れ替えるデッキを選択してください';
        this.shiftDeckMessage.time = -1;
        this.shiftDeckMessage.color = 'info';
        this.snackbar.shiftDeck = true;
      } else if (this.beforeDeckName === targetDeckName) {
        this.beforeDeckName = '';
        this.shiftDeckMessage.text = '入れ替えをキャンセルしました';
        this.shiftDeckMessage.time = 2000;
        this.shiftDeckMessage.color = 'info';
        this.snackbar.shiftDeck = true;
      } else {
        const before = store.deck.findIndex(
          (item) => item.name === this.beforeDeckName,
        );
        const after = store.deck.findIndex(
          (item) => item.name === targetDeckName,
        );

        [store.deck[before], store.deck[after]] = [
          store.deck[after],
          store.deck[before],
        ];

        this.beforeDeckName = '';
        this.shiftDeckMessage.text = 'デッキを入れ替えました';
        this.shiftDeckMessage.time = 2000;
        this.shiftDeckMessage.color = 'success';
        this.snackbar.shiftDeck = true;
      }
    },
    copyDeck(store, targetDeckName) {
      this.snackbar.shiftDeck = false;
      this.shiftDeckMessage.text = 'デッキを入れ替えました';

      if (this.beforeDeckName === '') {
        this.beforeDeckName = targetDeckName;
        this.copyDeckMessage.text = 'コピーするデッキを選択してください';
        this.copyDeckMessage.time = -1;
        this.copyDeckMessage.color = 'info';
        this.snackbar.copyDeck = true;
      } else if (this.beforeDeckName === targetDeckName) {
        this.beforeDeckName = '';
        this.copyDeckMessage.text = 'コピーをキャンセルしました';
        this.copyDeckMessage.time = 2000;
        this.copyDeckMessage.color = 'info';
        this.snackbar.copyDeck = true;
      } else {
        const before = store.deck.findIndex(
          (item) => item.name === this.beforeDeckName,
        );
        const after = store.deck.findIndex(
          (item) => item.name === targetDeckName,
        );

        store.deck[after].period = Number(store.deck[before].period);
        store.deck[after].cardData = store.deck[before].cardData;

        this.beforeDeckName = '';
        this.copyDeckMessage.text = 'デッキをコピーしました';
        this.copyDeckMessage.time = 2000;
        this.copyDeckMessage.color = 'success';
        this.snackbar.copyDeck = true;
      }
    },
    changeAceCard(store, targetMemberName, targetStyle) {
      let flg = false;

      for (const memberName in store.selectDeck.cardData) {
        for (const style in store.selectDeck.cardData[memberName]) {
          store.selectDeck.cardData[memberName][style].isAce =
            memberName === targetMemberName && style === targetStyle;

          if (!flg) {
            flg = memberName === targetMemberName && style === targetStyle;
          }
        }
      }

      this.isSelectedAceCard = flg;
    },
    /**
     * 選択中のカードを削除
     *
     * @param {Object} store - store
     * @param {string} memberName - メンバー名
     * @param {string} styleName - スタイル名
     */
    deleteSelectCard(store, memberName, styleName) {
      if (store.selectDeck.cardData[memberName][styleName].isAce) {
        this.isSelectedAceCard = false;
      }

      store.selectDeck.cardData[memberName][styleName].isAce = false;
      store.setSelectCard(store.makeDefaultCardId(memberName), {
        cardLevel: 1,
        SALevel: 1,
        SLevel: 1,
        releaseLevel: 1,
      });
    },
    musicList(store) {
      const list = {};

      for (const title in MUSIC_LIST) {
        if (MUSIC_LIST[title].term === Number(store.selectDeck.period)) {
          list[title] = MUSIC_LIST[title];
        }
      }

      return list;
    },
    setIcon(memberName) {
      return {
        'background-image': `url(${store.getImagePath(
          'icons/member',
          `icon_${memberName}`,
        )})`,
        'background-position': 'center',
      };
    },
    setValue(target, v) {
      this.bonus[target[0]][target[1]][target[2]] = v;
    },
    changePerformance(i, musicDataList) {
      if (this.selectMusic[i] === null) {
        this.performance[i] = [];
      } else {
        this.performance[i] = musicDataList[this.selectMusic[i]].singingMembers;
      }
    },
    makeIllustCard(store, selectCardId) {
      if (selectCardId.split('_')[1] === '000') {
        return 'NO IMAGE';
      } else {
        const cardId = selectCardId.split('_')[0];

        return `${store.conversion(
          store.findCardData(selectCardId).cardName,
        )}_${
          cardId === MEMBER_IDS.SELAIZU
            ? '桂城泉＆セラス 柳田 リリエンフェルト'
            : cardId === MEMBER_IDS.KOZUTSUZUMEGU
              ? '乙宗梢＆夕霧綴理＆藤島慈'
              : MEMBER_NAMES[MEMBER_IDS[cardId]].last
        }_覚醒後`;
      }
    },
    makeCardName(store, selectCardId) {
      if (selectCardId.split('_')[1] === '000') {
        return 'カードを選択してください';
      } else {
        return `[${store.searchRarity(selectCardId)}] ${
          store.findCardData(selectCardId).cardName
        }`;
      }
    },
    /**
     * パラメーター作成
     *
     * @param {Object} store vuex store
     * @param {string} name メンバー名
     * @param {string} style スタイル名
     * @param {string} attr 属性
     * @returns {number} パラメーター
     */
    makeParam(store, name, style, attr) {
      return store.cardParam(attr, {
        memberName: name,
        rare: store.searchRarity(
          store.findCardId(
            name,
            store.selectDeck.cardData[name][style].cardName,
          ),
        ),
        cardName: store.selectDeck.cardData[name][style].cardName,
      });
    },
    getParamList(store, name, style) {
      return store.card[name][
        store.searchRarity(
          store.findCardId(
            name,
            store.selectDeck.cardData[name][style].cardName,
          ),
        )
      ][store.selectDeck.cardData[name][style].cardName];
    },
    // reset(store) {
    //   for (const memberName in store.selectDeck.cardData) {
    //     store.selectDeck.cardData[memberName];
    //   }
    //   //[styleName].cardName = cardName;
    // },
    makeDefaultFormation() {
      const list = {};
      const list2 = {};

      for (const memberName of [
        'seras',
        'izumi',
        'ginko',
        'kosuzu',
        'hime',
        'free',
        'kaho',
        'sayaka',
        'rurino',
        'kozue',
        'tsuzuri',
        'megumi',
      ]) {
        for (const style of ['main', 'side1', 'side2']) {
          list2[style] = 'default';
          list[memberName] = list2;
        }
      }

      return list;
    },
    makeURL() {
      this.isUrlGenerate = false;
      // const params = {
      //   url: 'https://taira-no-atsumori.github.io/llllMgr/?gn1=gn_001',
      //   key: '5ebe3e98ceaf86947d93ebbe52e73070',
      //   analytics: false
      // };

      // axios.get('https://xgd.io/V1/shorten?url=https://taira-no-atsumori.github.io/llllMgr/&key=5ebe3e98ceaf86947d93ebbe52e73070&&analytics=false')
      //   .then(response => {// 通信成功時の処理
      //     console.log(response);
      //     if (response.status === 200) {
      //       console.log(response.data);
      //     } else {
      //       // err();
      //       console.log('想定外のエラーです');
      //     }
      //   })
      //   .catch(error => {// エラー時の処理
      //     console.log(error.status);
      //   })
      //   .finally(() => {// 成功・失敗に関わらず実行される処理
      //     this.isUrlGenerate = false;
      //   });

      // function err() {
      //   this.isUrlGenerate = false;
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
#deckNameArea {
  border-bottom: 1px solid #e5762c;
  display: grid;
  grid-template-columns: calc(32px + 4em) auto 32px;
  grid-auto-rows: 32px;

  span {
    align-content: center;
  }
}

.deckNameTitle {
  color: #fff;
  background: #e5762c;
  border-radius: 0 15px 15px 0;
  padding: 0 8px;
  margin-right: 8px;
  font-weight: bold;
}

#musicList {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    width: calc((100% - 90px) / 10);
  }
}

@media screen and (max-width: 600px) {
  #musicList {
    gap: 10px 2%;

    > li {
      width: 49%;
    }
  }
}
</style>
