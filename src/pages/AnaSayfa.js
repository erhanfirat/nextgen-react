import reactJSPng from "./../assets/react-js.png";
import { differenceInDays, formatDistance } from "date-fns";
import { tr } from "date-fns/locale/tr";

const AnaSayfa = () => {
  const egitimGunSayisi = differenceInDays(new Date(), new Date(2023, 10, 15));
  const yasaadigimGunSayisi = differenceInDays(
    new Date(),
    new Date(1995, 5, 12)
  );
  const gecenZaman = formatDistance(new Date(), new Date(1919, 4, 19), {
    locale: tr,
  });

  return (
    <div className="page">
      <h1 className="page-title">
        <i className="fa-solid fa-house fa-xs me-2"></i>
        Ana Sayfa
      </h1>
      <h2 className="text-sky-600">ReactJS Kütüphanesi</h2>
      <h3>{egitimGunSayisi} gündür yazılım öğreniyorum!</h3>
      <h3>{yasaadigimGunSayisi} gündür bu dünyadayım!</h3>
      <h3>
        Kurtuluşumuzun başlangıcından bu yana {gecenZaman} zaman geçmiştir.
      </h3>
      <p>
        React.js, Facebook tarafından geliştirilen ve kullanıcı arayüzleri
        oluşturmak için kullanılan bir JavaScript kütüphanesidir. Web
        uygulamalarının modern ve etkileşimli arayüzlerini geliştirmek amacıyla
        tasarlanan React, özellikle büyük ve dinamik veri setlerini yönetme
        konusunda etkileyici bir performans sergiler.
      </p>
      <img src={reactJSPng} className="p-2 w-[68%]" />
      <p>
        React.js öğrenmeye başlamak için ilk adım, temel web teknolojilerine
        olan hakimiyetinizdir. HTML, CSS ve JavaScript bilgisi, React ile daha
        etkili bir şekilde çalışmanıza yardımcı olacaktır. React, bileşen
        tabanlı bir yapıya sahiptir, yani bir uygulamayı küçük ve bağımsız
        parçalara böler. Bu nedenle, her bir bileşenin nasıl çalıştığını anlamak
        önemlidir.
      </p>
      <p>
        React.js öğrenme sürecinde, resmi React belgeleri ve çeşitli çevrimiçi
        kaynaklar önemli bir rol oynar. Kapsamlı bir şekilde belgeleri okumak ve
        örnek uygulamaları çalıştırmak, React konusundaki becerilerinizi
        geliştirmenin en etkili yollarından biridir. Ayrıca, topluluk forumları
        ve online kurslar aracılığıyla diğer React geliştiricileriyle iletişim
        kurarak deneyimlerinizi paylaşabilir ve sorularınızı sorabilirsiniz.
      </p>
      <p>
        Sonuç olarak, React.js öğrenme süreci disiplin, pratik ve sürekli
        öğrenme gerektiren bir yolculuktur. Temel web teknolojilerine sağlam bir
        temel atmak, resmi belgeleri incelemek ve toplulukla etkileşimde
        bulunmak, React.js öğrenme sürecinizi daha verimli ve etkili hale
        getirecek önemli adımlardır.
      </p>
      <button className="btn-cyn">Bana Tıkla</button>

      <button className="btn-cyn">Bana Tıkla</button>

      <button className="btn-cyn">Bana Tıkla</button>
    </div>
  );
};

export default AnaSayfa;
