import styled from "styled-components";
import { Header } from "./books";
import Text from "../components/Text";
import Button from "../components/Button";


const Push = styled(({ className }) => {
  const prayerPoints = [
    {
      header: "Prayer for The Mission House",
      prayer: [
        "Prayer for God's favor upon the mission house",
        "everyone that steps in the mission house must experience a turn around",
        "God bless the mission house"
      ]
    },
    {
      header: "Prayer for The Nigeria",
      prayer: [
        "Pray for God fearing leaders",
        "Pray for mercy on the nation",
        "God bless nigeria"
      ]
    },
    {
      header: "Prayer for The Mission House",
      prayer: [
        "Pray for God fearing leaders",
        "Pray for mercy on the nation",
        "God bless nigeria"
      ]
    }
  ];

  const handleClick = () => {
    prayerPoints.push({
      header: "21days push",
      prayer: ["The ten thousand sons and daughters are coming",
        "We have power in Christ",
        "From the east to the west we are blessed"
      ]
    })
  }

  return (
    <>
      <div className={className}>
        <Header image="/push-w.jpg" mobImage="/push-m.jpg">
          <Text className="pageTitle" size="6" color="white">PUSH</Text>
        </Header>
        <div className="pageText">
          <Text color="primary" size="4">In House On the Rock We strongly believe in the efficacy of prayer <br /> hence we PUSH: Pray Until Something Happens</Text>
        </div>
        <div className="prayerWrap">
          {prayerPoints.map((PrayerPoint, idx) =>
            <div className="prayer" key={idx}>
              <Text className="" size="4" weight="bold" color="primary">{PrayerPoint.header}</Text>
              <Text className="" size="3" color="primary">{PrayerPoint.prayer.map((pray, idx) => <div className="prayerPoint">{`${idx + 1}. ${pray}`}</div>)}</Text>
            </div>
          )}
        </div>
        <div className="prayerRequest">
          <input className="prayerField" type="text" placeholder="send prayer point" />
          <Button size="3" onClick={handleClick} active>Send prayer</Button>
        </div>
      </div>
    </>
  )
})`
background: ${({ theme }) => theme.colors.white};
overflow:hidden;
padding-bottom:50px;

  .pageTitle {
    width:60%;
    text-align:left;
  }
  .pageText {
    margin:30px 0;
  }
  .prayer {
    width:60%;
    margin: 0px auto;
    margin-top: 30px;
    padding: 30px 0;
    border-radius:20px;
    box-shadow: 0 2px 10px #777;
  }
  .prayerPoint {
    padding-top:10px;
  }
  .prayerRequest {
    margin-top:50px;
    dipslay:flex;
    flex-flow:row wrap;
  }
  .prayerField {
    background:transparent;
    width:40%;
    border:none;
    text-align:center;
    border-bottom:1px solid #aaa;
    outline:none;
    padding:5px;

  }
  .prayerField:focus {
    border-bottom:1px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width:600px){
    overflow:hidden;
    .pageTitle {
      width:100%;
      text-align:center;
    }
    .prayer {
      width:80%;
    }
  }
`

export default Push;