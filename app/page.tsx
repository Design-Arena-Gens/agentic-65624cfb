const principles = [
  {
    title: "Dasar Konseptual",
    points: [
      "Penggolongan hukum adalah upaya sistematis untuk menertibkan norma-norma hukum agar mudah dipahami dan diterapkan.",
      "Menurut Soerjono Soekanto, klasifikasi ini merupakan pintu masuk untuk memetakan keragaman bidang hukum sekaligus menilai keterkaitannya."
    ]
  },
  {
    title: "Tujuan Strategis",
    points: [
      "Memastikan penegakan hukum berjalan efektif karena setiap peristiwa hukum diarahkan ke rezim pengaturan yang relevan.",
      "Memberikan panduan bagi pembentuk undang-undang, aparat penegak hukum, dan masyarakat dalam menafsirkan serta menggunakan instrumen hukum.",
      "Menyusun kurikulum dan riset hukum secara sistematis sehingga perkembangan teori dan praktik berjalan seimbang."
    ]
  }
];

const classifications = [
  {
    heading: "Berdasarkan Sifat Mengikat",
    description:
      "Membedakan norma yang mengatur hubungan antar individu (hukum privat) dari norma yang mengikat hubungan antara individu dan negara (hukum publik).",
    items: [
      {
        term: "Hukum Privat (Perdata)",
        detail:
          "Mengatur kepentingan perseorangan, seperti hukum perjanjian, hukum keluarga, dan hukum waris. Penerapannya menonjolkan asas kesetaraan para pihak."
      },
      {
        term: "Hukum Publik",
        detail:
          "Mengatur hubungan antara warga dengan negara, mencakup hukum tata negara, hukum administrasi, dan hukum pidana."
      }
    ]
  },
  {
    heading: "Berdasarkan Bentuknya",
    description:
      "Menyoroti cara norma hukum dihadirkan dalam masyarakat, apakah dituangkan secara tertulis atau tumbuh dari kebiasaan.",
    items: [
      {
        term: "Hukum Tertulis",
        detail:
          "Tersusun dalam peraturan perundang-undangan yang disahkan melalui prosedur formal, memudahkan kepastian dan penafsiran."
      },
      {
        term: "Hukum Tidak Tertulis",
        detail:
          "Lahir dari praktik sosial yang diakui sebagai kewajiban hukum, seperti hukum adat dan kebiasaan internasional."
      }
    ]
  },
  {
    heading: "Berdasarkan Waktu Berlakunya",
    description:
      "Mengidentifikasi norma yang berlaku permanen dengan yang sifatnya sementara sebagai respons terhadap situasi tertentu.",
    items: [
      {
        term: "Hukum Tetap",
        detail:
          "Dirancang untuk diterapkan tanpa batas waktu, menjadi kerangka dasar bagi pengaturan lain."
      },
      {
        term: "Hukum Sementara",
        detail:
          "Diberlakukan dalam kondisi khusus, misalnya keadaan darurat atau transisi pemerintahan, dan dapat dicabut setelah tujuan tercapai."
      }
    ]
  },
  {
    heading: "Berdasarkan Sumbernya",
    description:
      "Memperlihatkan asal-usul kekuatan mengikat suatu norma, baik dari institusi formal maupun praktik yang diakui.",
    items: [
      {
        term: "Hukum Legislatif",
        detail:
          "Berasal dari produk lembaga pembentuk undang-undang seperti undang-undang dan peraturan pemerintah."
      },
      {
        term: "Hukum Yurisprudensi",
        detail:
          "Lahir dari putusan pengadilan yang bernilai preseden dan diikuti oleh putusan-putusan berikutnya."
      },
      {
        term: "Hukum Doktrin",
        detail:
          "Digali dari pendapat ahli hukum yang berpengaruh dan dijadikan rujukan dalam penemuan hukum."
      }
    ]
  }
];

const implementationImpacts = [
  {
    title: "Penegakan Hukum",
    description:
      "Memudahkan aparat memilih instrumen penegakan yang tepat, misalnya membedakan sanksi administratif, pidana, atau perdata."
  },
  {
    title: "Perancangan Kebijakan",
    description:
      "Pembentuk undang-undang dapat merancang regulasi sektoral dengan mempertimbangkan keterkaitan antar cabang hukum."
  },
  {
    title: "Pendidikan dan penelitian",
    description:
      "Klasifikasi membantu penyusunan kurikulum, metode penelitian, dan pemetaan isu sehingga perkembangan ilmu hukum lebih terarah."
  },
  {
    title: "Kesadaran Masyarakat",
    description:
      "Masyarakat memahami hak dan kewajiban secara lebih jelas karena setiap bidang hukum memiliki struktur dan mekanisme yang pasti."
  }
];

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 py-16">
      <header className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">
          Analisis Komprehensif
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Memahami Penggolongan Hukum Menurut Soerjono Soekanto
        </h1>
        <p className="mt-6 text-lg text-slate-200 md:text-xl">
          Penggolongan hukum bukan sekadar daftar kategori; ia adalah kerangka
          kerja konseptual yang membantu menata kompleksitas sistem hukum. Dengan
          membedakan ciri, fungsi, dan cakupan setiap bidang, penerapan hukum
          menjadi lebih tepat sasaran sekaligus menjaga konsistensi antar
          peraturan.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-lg backdrop-blur"
          >
            <h2 className="text-2xl font-semibold text-white">
              {principle.title}
            </h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              {principle.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            Dimensi Penggolongan Hukum
          </h2>
          <p className="text-slate-200">
            Soerjono Soekanto menekankan bahwa klasifikasi hukum harus menonjolkan
            keteraturan sekaligus keluwesan. Setiap dimensi penggolongan
            menghasilkan peta yang menuntun penafsir menemukan norma yang paling
            relevan. Berikut merupakan dimensi utama yang lazim digunakan dalam
            praktik akademik maupun kelembagaan.
          </p>
        </div>

        <div className="space-y-12">
          {classifications.map((classification) => (
            <article key={classification.heading} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {classification.heading}
                </h3>
                <p className="mt-2 text-slate-300">
                  {classification.description}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {classification.items.map((item) => (
                  <div
                    key={item.term}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg"
                  >
                    <h4 className="text-xl font-semibold text-sky-200">
                      {item.term}
                    </h4>
                    <p className="mt-3 text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-slate-900 p-10 shadow-xl backdrop-blur">
        <h2 className="text-3xl font-semibold text-white">
          Dampak Praktis Penggolongan
        </h2>
        <p className="mt-4 text-slate-200">
          Klasifikasi hukum menjadi alat navigasi yang berdampak langsung terhadap
          proses pembentukan, penemuan, dan penegakan hukum. Tanpa kerangka ini,
          norma hukum berisiko tumpang tindih atau tidak efektif merespons
          dinamika sosial.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {implementationImpacts.map((impact) => (
            <article
              key={impact.title}
              className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white">
                {impact.title}
              </h3>
              <p className="mt-3 text-slate-300">{impact.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur">
        <h2 className="text-3xl font-semibold text-white">
          Tantangan dan Arah Pengembangan
        </h2>
        <div className="mt-6 space-y-4 text-slate-200">
          <p>
            Perubahan sosial, teknologi, dan hubungan transnasional menuntut
            pembaruan klasifikasi agar tetap relevan. Bidang hukum baru seperti
            hukum siber, hukum lingkungan global, dan hukum kemanusiaan
            internasional memerlukan penyesuaian pada peta hukum tradisional.
          </p>
          <p>
            Pendekatan Soerjono Soekanto mendorong sinergi antara teori dengan
            praktik. Ia menekankan pentingnya analisis sosio-yuridis untuk
            menilai apakah suatu norma masih efisien, serta perlunya dialog
            antar-bidang hukum guna menghindari konflik norma dan menutup celah
            hukum (legal loopholes).
          </p>
          <p>
            Dengan demikian, penggolongan hukum bukan proses sekali jadi,
            melainkan upaya berkelanjutan yang menuntut pembaruan data, evaluasi
            dampak, serta adaptasi terhadap nilai-nilai masyarakat. Kerangka ini
            memastikan hukum berfungsi sebagai sarana pembaharuan sosial sekaligus
            penjaga keteraturan.
          </p>
        </div>
      </section>
    </main>
  );
}
